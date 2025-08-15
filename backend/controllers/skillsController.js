import Skill from '../models/Skill.js';

// Get all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new skill
export const createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a skill by ID
export const updateSkill = async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a skill by ID
export const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
