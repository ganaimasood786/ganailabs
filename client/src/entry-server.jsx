// Build-time renderer: turns each route into static HTML so search engines see the full content.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

export { SEO, SITE, siteGraph, pageJsonLd } from './seo.js';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
