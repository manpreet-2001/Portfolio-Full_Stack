import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, default: 'Beginner' }, // e.g., Beginner, Intermediate, Expert
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
