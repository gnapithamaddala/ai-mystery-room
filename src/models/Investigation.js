import mongoose from 'mongoose';
const { Schema } = mongoose;
const suspectSchema = new Schema({ id:String,name:String,age:Number,role:String,biography:String,relationship:String,motive:String,alibi:String,knownFacts:[String] },{_id:false});
const timelineSchema = new Schema({ id:String,time:String,title:String,description:String },{_id:false});
const evidenceSchema = new Schema({ id:String,type:String,title:String,description:String,content:Schema.Types.Mixed,relatedSuspectIds:[String],relatedTimelineEventIds:[String],internalRelevance:String,assetUrl:String },{_id:false});
const solutionSchema = new Schema({ culpritId:String,motive:String,method:String,opportunity:String,reconstruction:String,reasoning:String,decisiveEvidenceIds:[String],redHerringExplanations:[String],timeline:[Schema.Types.Mixed] },{_id:false});
const investigationSchema = new Schema({ caseTitle:{type:String,required:true},description:String,scenario:{type:String,required:true},category:String,difficulty:String,atmosphere:String,status:{type:String,enum:['active','completed','failed'],default:'active'},incident:{summary:String,location:String,incidentTime:String,incidentType:String},suspects:[suspectSchema],timeline:[timelineSchema],evidence:[evidenceSchema],hints:[String],solution:{type:solutionSchema,required:true},ownerSession:{type:String,required:true,index:true} },{timestamps:true});
investigationSchema.index({ownerSession:1,createdAt:-1});
export default mongoose.model('Investigation',investigationSchema);
