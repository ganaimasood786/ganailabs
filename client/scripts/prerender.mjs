// Runs after `vite build` + the SSR build. Writes one HTML file per route with the page's
// real content, title, description, canonical URL and structured data baked in.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, SEO, SITE, siteGraph, pageJsonLd } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

for (const [route, seo] of Object.entries(SEO)) {
  const url = SITE + (route === '/' ? '/' : route);
  const appHtml = render(route);
  const jsonLd = [siteGraph, ...(pageJsonLd[route] || [])].map(ld).join('\n    ');

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(seo.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(seo.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(seo.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace('<!--app-jsonld-->', jsonLd)
    .replace('<!--app-html-->', appHtml);

  if (!html.includes(appHtml)) throw new Error(`Could not inject HTML for ${route}`);

  const outFile = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${route.padEnd(11)} -> ${path.relative(root, outFile)} (${(html.length / 1024).toFixed(1)} KB)`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
