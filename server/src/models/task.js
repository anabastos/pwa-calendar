import mongoose from 'mongoose'

const Task = new mongoose.Schema({
  user: { type: String, required: true },
  name: { type: String, required: true },  
  description: { type: String },
  duration: { type: Array },  
  notification: { type: Date },
  repetition: { type: Boolean },
});

export default mongoose.model('task', Task)