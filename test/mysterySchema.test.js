import test from 'node:test';
import assert from 'node:assert/strict';
import { validateMystery } from '../src/services/mysterySchema.js';

const valid = {
  caseTitle:'The Quiet Archive',description:'A chart is missing.',incident:{summary:'A chart vanished.',location:'The archive',incidentTime:'9 PM',incidentType:'Theft'},
  suspects:[1,2,3].map(n=>({id:`s${n}`,name:`Suspect ${n}`,role:'Archivist',biography:'A fictional person.',relationship:'Worked at the archive.',motive:'A possible motive.',alibi:'A stated alibi.',knownFacts:[]})),
  timeline:[1,2,3].map(n=>({id:`t${n}`,time:`${n} PM`,title:`Event ${n}`,description:'A timeline event.'})),
  evidence:[1,2,3,4,5,6,7,8].map(n=>({id:`e${n}`,type:'document',title:`Record ${n}`,description:'A record.',content:'Fictional record.',relatedSuspectIds:['s1'],relatedTimelineEventIds:['t1'],internalRelevance:'supporting'})),
  hints:['Look at the records.','Compare two accounts.','Notice the contradiction.'],
  solution:{culpritId:'s1',motive:'A motive.',method:'A method.',opportunity:'An opportunity.',reconstruction:'Events unfolded.',reasoning:'The evidence connects.',decisiveEvidenceIds:['e1'],redHerringExplanations:[],timeline:[]}
};

test('accepts a complete case whose references resolve',()=>assert.equal(validateMystery(valid,3).caseTitle,'The Quiet Archive'));
test('rejects a solution that references an unknown suspect',()=>{
 const broken=structuredClone(valid);broken.solution.culpritId='missing';assert.throws(()=>validateMystery(broken,3),/missing suspect/);
});
test('rejects unresolved evidence references',()=>{
 const broken=structuredClone(valid);broken.evidence[0].relatedSuspectIds=['missing'];assert.throws(()=>validateMystery(broken,3),/unknown suspect/);
});
test('rejects a suspect count different from the request',()=>assert.throws(()=>validateMystery(valid,4),/does not match/));
