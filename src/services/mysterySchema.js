import { z } from 'zod';
const suspect = z.object({id:z.string(),name:z.string().min(2),age:z.number().optional(),role:z.string(),biography:z.string(),relationship:z.string(),motive:z.string(),alibi:z.string(),knownFacts:z.array(z.string()).default([])});
const evidence = z.object({id:z.string(),type:z.enum(['chat','image','audio','document','witness','system_log']),title:z.string(),description:z.string(),content:z.union([z.string(),z.record(z.any())]),relatedSuspectIds:z.array(z.string()).default([]),relatedTimelineEventIds:z.array(z.string()).default([]),internalRelevance:z.enum(['critical','supporting','red_herring']).default('supporting'),assetUrl:z.string().optional()});
export const generatedMysterySchema = z.object({caseTitle:z.string(),description:z.string(),incident:z.object({summary:z.string(),location:z.string(),incidentTime:z.string(),incidentType:z.string()}),suspects:z.array(suspect).min(3).max(6),timeline:z.array(z.object({id:z.string(),time:z.string(),title:z.string(),description:z.string()})).min(3),evidence:z.array(evidence).min(8).max(12),hints:z.array(z.string()).length(3),solution:z.object({culpritId:z.string(),motive:z.string(),method:z.string(),opportunity:z.string(),reconstruction:z.string(),reasoning:z.string(),decisiveEvidenceIds:z.array(z.string()),redHerringExplanations:z.array(z.string()),timeline:z.array(z.record(z.any()))})});
export function validateMystery(raw, requestedCount) {
 const result=generatedMysterySchema.safeParse(raw); if(!result.success)throw new Error('Generated case failed its structure checks.'); const m=result.data;
 if(m.suspects.length!==requestedCount)throw new Error('Generated suspect count does not match request.');
 const suspects=new Set(m.suspects.map(s=>s.id)); const evidenceIds=new Set(m.evidence.map(e=>e.id)); const timelineIds=new Set(m.timeline.map(t=>t.id));
 if(!suspects.has(m.solution.culpritId))throw new Error('Solution references a missing suspect.');
 if(m.suspects.some(s=>s.id.length===0)||new Set(m.suspects.map(s=>s.id)).size!==m.suspects.length)throw new Error('Suspect IDs must be unique.');
 if(new Set(m.evidence.map(e=>e.id)).size!==m.evidence.length)throw new Error('Evidence IDs must be unique.');
 for(const e of m.evidence){if(e.relatedSuspectIds.some(id=>!suspects.has(id)))throw new Error('Evidence references an unknown suspect.');if(e.relatedTimelineEventIds.some(id=>!timelineIds.has(id)))throw new Error('Evidence references an unknown timeline event.');}
 if(m.solution.decisiveEvidenceIds.some(id=>!evidenceIds.has(id)))throw new Error('Solution references missing decisive evidence.');
 return m;
}
