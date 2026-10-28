import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import app from '../src/app.js';

let server;
let base;
before(async()=>{server=app.listen(0);await new Promise(resolve=>server.once('listening',resolve));base=`http://127.0.0.1:${server.address().port}`;});
after(async()=>{await new Promise((resolve,reject)=>server.close(error=>error?reject(error):resolve()));});

test('issues a signed anonymous session and accepts it for the demo verdict',async()=>{
 const issued=await fetch(`${base}/api/session`,{method:'POST'});const {token}=await issued.json();assert.equal(issued.status,200);assert.ok(token);
 const response=await fetch(`${base}/api/demo/accusation`,{method:'POST',headers:{'content-type':'application/json',authorization:`Bearer ${token}`},body:JSON.stringify({suspectId:'s4'})});
 const body=await response.json();assert.equal(response.status,200);assert.equal(body.result.correct,true);assert.equal(body.result.culprit.name,'Theo Park');
});
test('does not reveal demo verdict data without a signed session',async()=>{
 const response=await fetch(`${base}/api/demo/accusation`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({suspectId:'s4'})});assert.equal(response.status,401);
});
