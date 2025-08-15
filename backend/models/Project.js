import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    default: '📱'
  },
  technologies: [{
    type: String,
    trim: true
  }],
  github: {
    type: String,
    trim: true
  },
  live: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'Other'],
    default: 'Frontend'
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project; 