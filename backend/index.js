import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import methodOverride from 'method-override';
import open from 'open';

import skillsRouter from './routes/skills.js';
import experiencesRouter from './routes/experiences.js';
import projectsRouter from './routes/projects.js';
import adminRouter from './routes/admin.js';

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());           // Enable CORS for React frontend
app.use(express.json());   // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(methodOverride('_method')); // Enable PUT/DELETE methods in forms

// Template engine setup
app.set('view engine', 'pug');
app.set('views', './views');

// Static files
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Admin routes (rendered with Pug templates)
app.use('/admin', adminRouter);

// API Routes
app.use('/api/skills', skillsRouter);
app.use('/api/experiences', experiencesRouter);
app.use('/api/projects', projectsRouter);

// Root route - redirect to admin
app.get('/', (req, res) => {
  res.redirect('/admin/experiences');
});

// Start server and open browser
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  open(`http://localhost:${PORT}`);
});
