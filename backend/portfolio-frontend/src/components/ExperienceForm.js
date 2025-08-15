import React, { useState, useEffect } from 'react';
import api from '../api/api';

const ExperienceForm = ({ fetchExperiences, editingExperience, setEditingExperience }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState(1);

  useEffect(() => {
    if (editingExperience) {
      setTitle(editingExperience.title);
      setDescription(editingExperience.description);
      setOrder(editingExperience.order);
    }
  }, [editingExperience]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const experienceData = { title, description, order };

    if (editingExperience) {
      await api.put(`/experiences/${editingExperience._id}`, experienceData);
      setEditingExperience(null);
    } else {
      await api.post('/experiences', experienceData);
    }

    setTitle('');
    setDescription('');
    setOrder(1);
    fetchExperiences();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="number" placeholder="Order" value={order} onChange={e => setOrder(Number(e.target.value))} />
      <button type="submit">{editingExperience ? 'Update' : 'Add'} Experience</button>
    </form>
  );
};

export default ExperienceForm;
