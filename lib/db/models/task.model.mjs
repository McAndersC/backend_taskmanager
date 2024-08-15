import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const taskScheme = new Schema({
    
    title: { type: String,  required: true },
    description: { type: String,  required: true},
    status : {type: String, default: 'open'},
    deadline: { type: Date, default : new Date() },
    assignee: { type: Schema.Types.ObjectId, ref: 'user',default: null},
    created: { type: Date, default : new Date() },
   
});

export default mongoose.models.task || mongoose.model('task', taskScheme);