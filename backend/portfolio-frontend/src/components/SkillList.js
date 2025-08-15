import React, { useEffect, useState } from 'react';
import api from '../api/api';
import SkillForm from './SkillForm';

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);

  const fetchSkills = async () => {
    const res = await api.get('/skills');
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/skills/${id}`);
    fetchSkills();
  };

  return (
    <div>
      <h2>Skills</h2>
      <SkillForm fetchSkills={fetchSkills} editingSkill={editingSkill} setEditingSkill={setEditingSkill} />
      <ul>
        {skills.map(skill => (
          <li key={skill._id}>
            {skill.name} - {skill.level}
            <button onClick={() => setEditingSkill(skill)}>Edit</button>
            <button onClick={() => handleDelete(skill._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
