import app,{connectDatabase} from './app.js';
import {env} from './config/environment.js';
try{if(env.mongoUri)await connectDatabase();else console.warn('MongoDB is not configured. Demo mode is available; generated investigations require MongoDB.');app.listen(env.port,()=>console.log(`AI Mystery Room API listening on port ${env.port}`));}catch(error){console.error('MongoDB unavailable. Starting API in demo-only mode:',error.message);app.listen(env.port,()=>console.log(`AI Mystery Room API listening on port ${env.port}`));}
