import mongoose from 'mongoose'

const Event = new mongoose.Schema({
  day: { type: Date, required: true },
  note: { type: String, required: true },
  user: { type: String, required: true },
});

export default mongoose.model('event', Event)