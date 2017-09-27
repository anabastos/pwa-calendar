import mongoose from 'mongoose'
import config from '../../config'

const Note = new mongoose.Schema({
  day: { type: Date, required: true },
  note: { type: String, required: true },
  user: { type: User, required: true },
});

export default mongoose.model('note', Note)