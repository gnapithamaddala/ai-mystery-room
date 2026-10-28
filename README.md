# AI Mystery Room

A MERN mystery investigation game. Create a fictional case, inspect clues and suspects, and make a final accusation. The included demo is a predefined case and does not require Gemini or MongoDB.

## Setup

1. Install Node.js LTS and MongoDB.
2. Run `npm install`, `npm install --prefix client`, and `npm install --prefix server`.
3. Copy `.env.example` to `server/.env`; configure `MONGODB_URI`, `GEMINI_API_KEY`, `SESSION_SECRET`, and optionally `GEMINI_MODEL`.
4. Run `npm run dev`. Frontend: http://localhost:5173; API: http://localhost:5000/api/health.

The demo case can be played without external services. New AI mysteries require a reachable MongoDB instance and a valid Gemini key. The server never reports the demo as AI-generated.

## Commands

- `npm run dev` starts client and server.
- `npm run build` creates the client production build.
- `npm test` runs backend and frontend tests.

## Notes

Cases, evidence, and anonymous progress are stored server-side for generated investigations. A signed anonymous session token scopes access to a visitor’s cases. Set a stable `SESSION_SECRET` so access survives server restarts. The browser keeps demo progress locally. Images and audio are text descriptions/transcripts unless a genuine asset URL is provided. Multiplayer, accounts, and media generation are outside the MVP.
