# GanaiLabs Website (MERN)

Company website for **GanaiLabs**: React (Vite) frontend + Express/Node backend + MongoDB for contact-form enquiries.
Deploys as a **single free web service on Render**: Express serves the built React app and the `/api` routes.

```
ganailabs/
├── client/          React + Vite + React Router (Home, About, Services, Portfolio, Contact)
│   └── src/data.js  ← edit company details, services, projects, testimonials here
├── server/          Express API + Mongoose (POST /api/contact, GET /api/health)
├── render.yaml      Render blueprint (free plan)
└── package.json     root build/start scripts used by Render
```

## Run locally

```bash
npm run install-all
cp server/.env.example server/.env   # optional: add your MONGO_URI
npm run dev:server                   # API on http://localhost:5000
npm run dev:client                   # site on http://localhost:5173 (proxies /api)
```

Production-style: `npm run build && npm start` then open http://localhost:5000.

MongoDB is optional. Without `MONGO_URI`, enquiries are logged to the server console instead of saved.

## Free MongoDB (Atlas)

1. Create a free M0 cluster at https://www.mongodb.com/atlas
2. Database Access → add a user. Network Access → allow `0.0.0.0/0` (Render's IPs change).
3. Copy the connection string, e.g. `mongodb+srv://user:pass@cluster.mongodb.net/ganailabs`

## Deploy free on Render

1. Push this folder to a GitHub repo.
2. On https://render.com → **New → Blueprint** → pick the repo (it reads `render.yaml`).
   Or **New → Web Service** with:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Instance type: **Free**
3. Add env var `MONGO_URI` (your Atlas string).
4. Deploy. Your site will be at `https://ganailabs.onrender.com` (or similar).

Note: free Render services sleep after ~15 minutes idle; the first visit after that takes ~30-50s to wake.

## View enquiries

Open your Atlas cluster → Browse Collections → `ganailabs.contacts`.
