import express from 'express';
import {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectsController.js';

const router = express.Router();

// GET all projects
router.get('/', getAllProjects);

// GET single project
router.get('/:id', getProject);

// POST new project
router.post('/', createProject);

// PUT update project
router.put('/:id', updateProject);

// DELETE project
router.delete('/:id', deleteProject);

export default router; 