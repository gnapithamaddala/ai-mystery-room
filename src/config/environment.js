import dotenv from 'dotenv';
import { randomBytes } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const configDirectory = dirname(fileURLToPath(import.meta.url));
const serverDirectory = resolve(configDirectory, '../..');
// Prefer server/.env when present, then fall back to the repository root .env.
dotenv.config({ path: resolve(serverDirectory, '.env') });
dotenv.config({ path: resolve(serverDirectory, '../.env') });

export const env = { nodeEnv: process.env.NODE_ENV || 'development', port: Number(process.env.PORT || 5000), mongoUri: process.env.MONGODB_URI || '', geminiKey: process.env.GEMINI_API_KEY || '', geminiModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash', clientUrl: process.env.CLIENT_URL || 'http://localhost:5173', sessionSecret: process.env.SESSION_SECRET || randomBytes(32).toString('hex') };
