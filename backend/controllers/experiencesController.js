import Experience from '../models/experiences.js';

// Get all experiences
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new experience
export const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    const savedExperience = await experience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an experience by ID
export const updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedExperience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an experience by ID
export const deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
