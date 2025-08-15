import express from 'express';
import { getExperiences, createExperience, updateExperience, deleteExperience } from '../controllers/experiencesController.js';

const router = express.Router();

router.get('/', getExperiences);
router.post('/', createExperience);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

export default router;
