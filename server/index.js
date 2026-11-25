import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contact.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '20kb' }));

// Accepts MONGO_URI or MONGODB_URI, and tolerates values pasted as `MONGODB_URI="mongodb+srv://..."`
function cleanMongoUri(raw) {
  if (!raw) return '';
  let v = raw.trim();
  v = v.replace(/^(export\s+)?MONGO(DB)?_URI\s*=\s*/i, ''); // drop a pasted "NAME=" prefix
  v = v.replace(/^["'`](.*)["'`];?$/s, '$1').trim(); // drop surrounding quotes
  return v;
}

const mongoUri = cleanMongoUri(process.env.MONGO_URI || process.env.MONGODB_URI);

// Connect to MongoDB (optional: the site still works without it)
if (mongoUri) {
  mongoose
    .connect(mongoUri, { dbName: 'ganailabs' })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err.message, `(value starts with "${mongoUri.slice(0, 14)}")`));
} else {
  console.warn('MONGO_URI not set - contact submissions will only be logged to the console.');
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.use('/api/contact', contactRoutes);

// Serve the React build in production
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist, { redirect: false }));
  // Serve the pre-rendered page for the route (e.g. /about -> about/index.html), else the app shell
  app.get(/^(?!\/api).*/, (req, res) => {
    const page = path.join(clientDist, req.path.replace(/^\/+|\/+$/g, ''), 'index.html');
    const safe = page.startsWith(clientDist) && fs.existsSync(page);
    res.sendFile(safe ? page : path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => console.log(`GanaiLabs server running on port ${PORT}`));
