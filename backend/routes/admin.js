import express from 'express';
import Experience from '../models/experiences.js';
import Skill from '../models/Skill.js';
import Project from '../models/Project.js';

const router = express.Router();

/* -------- Experiences -------- */

// READ list
router.get('/experiences', async (req, res) => {
  const experiences = await Experience.find().sort({ startDate: -1 });
  res.render('experiences', { experiences, activePage: 'experiences' });
});

// CREATE form
router.get('/experiences/new', (req, res) => {
  res.render('experienceForm', { experience: {}, activePage: 'experiences' });
});

// CREATE action
router.post('/experiences', async (req, res) => {
  const { title, company, startDate, endDate, description } = req.body;
  await Experience.create({ title, company, startDate, endDate, description });
  res.redirect('/admin/experiences');
});

// UPDATE form
router.get('/experiences/edit/:id', async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  res.render('experienceForm', { experience, activePage: 'experiences' });
});

// UPDATE action
router.put('/experiences/:id', async (req, res) => {
  const { title, company, startDate, endDate, description } = req.body;
  await Experience.findByIdAndUpdate(req.params.id, { title, company, startDate, endDate, description });
  res.redirect('/admin/experiences');
});

// DELETE
router.delete('/experiences/:id', async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.redirect('/admin/experiences');
});

/* -------- Skills -------- */

// READ list
router.get('/skills', async (req, res) => {
  const skills = await Skill.find().sort({ createdAt: -1 });
  res.render('skills', { skills, activePage: 'skills' });
});

// CREATE form
router.get('/skills/new', (req, res) => {
  res.render('skillForm', { skill: {}, activePage: 'skills' });
});

// CREATE action
router.post('/skills', async (req, res) => {
  const { name, level } = req.body;
  await Skill.create({ name, level });
  res.redirect('/admin/skills');
});

// UPDATE form
router.get('/skills/edit/:id', async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  res.render('skillForm', { skill, activePage: 'skills' });
});

// UPDATE action
router.put('/skills/:id', async (req, res) => {
  const { name, level } = req.body;
  await Skill.findByIdAndUpdate(req.params.id, { name, level });
  res.redirect('/admin/skills');
});

// DELETE
router.delete('/skills/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect('/admin/skills');
});

/* -------- Projects -------- */

// READ list
router.get('/projects', async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });
  res.render('projects', { projects, activePage: 'projects' });
});

// CREATE form
router.get('/projects/new', (req, res) => {
  res.render('projectForm', { project: {}, activePage: 'projects' });
});

// CREATE action
router.post('/projects', async (req, res) => {
  const { title, description, image, technologies, github, live, category, featured, order } = req.body;
  const techArray = technologies ? technologies.split(',').map(tech => tech.trim()) : [];
  await Project.create({ 
    title, 
    description, 
    image, 
    technologies: techArray, 
    github, 
    live, 
    category, 
    featured: featured === 'on', 
    order: order || 0 
  });
  res.redirect('/admin/projects');
});

// UPDATE form
router.get('/projects/edit/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.render('projectForm', { project, activePage: 'projects' });
});

// UPDATE action
router.put('/projects/:id', async (req, res) => {
  const { title, description, image, technologies, github, live, category, featured, order } = req.body;
  const techArray = technologies ? technologies.split(',').map(tech => tech.trim()) : [];
  await Project.findByIdAndUpdate(req.params.id, {
    title,
    description,
    image,
    technologies: techArray,
    github,
    live,
    category,
    featured: featured === 'on',
    order: order || 0
  });
  res.redirect('/admin/projects');
});

// DELETE
router.delete('/projects/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/admin/projects');
});

export default router;
