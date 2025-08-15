import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ExperienceForm from './ExperienceForm';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);

  const fetchExperiences = async () => {
    const res = await api.get('/experiences');
    setExperiences(res.data);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/experiences/${id}`);
    fetchExperiences();
  };

  return (
    <div>
      <h2>Experiences</h2>
      <ExperienceForm fetchExperiences={fetchExperiences} editingExperience={editingExperience} setEditingExperience={setEditingExperience} />
      <ul>
        {experiences.map(exp => (
          <li key={exp._id}>
            {exp.title} - {exp.description}
            <button onClick={() => setEditingExperience(exp)}>Edit</button>
            <button onClick={() => handleDelete(exp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
