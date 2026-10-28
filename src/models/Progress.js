import mongoose from 'mongoose';
const noteSchema = new mongoose.Schema({ id:String,content:{type:String,maxlength:2000},createdAt:{type:Date,default:Date.now} },{_id:false});
const progressSchema = new mongoose.Schema({ investigationId:{type:mongoose.Schema.Types.ObjectId,ref:'Investigation',required:true,index:true},sessionId:{type:String,required:true,index:true},reviewedEvidenceIds:[String],notes:[noteSchema],hintsUsed:[Number],accusedSuspectId:String,verdict:mongoose.Schema.Types.Mixed,completedAt:Date },{timestamps:true});
progressSchema.index({investigationId:1,sessionId:1},{unique:true});
export default mongoose.model('Progress',progressSchema);
