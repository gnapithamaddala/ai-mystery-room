export function publicCase(doc) {
 const x=doc.toObject?doc.toObject():doc;
 return {id:String(x._id||x.id),caseTitle:x.caseTitle,description:x.description,scenario:x.scenario,category:x.category,difficulty:x.difficulty,atmosphere:x.atmosphere,status:x.status,incident:x.incident,suspects:x.suspects,timeline:x.timeline,evidence:(x.evidence||[]).map(({internalRelevance,...e})=>e),createdAt:x.createdAt};
}
