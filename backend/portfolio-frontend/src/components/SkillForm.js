import React, { useState, useEffect } from 'react';
import api from '../api/api';

const SkillForm = ({ fetchSkills, editingSkill, setEditingSkill }) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [order, setOrder] = useState(1);

  useEffect(() => {
    if (editingSkill) {
      setName(editingSkill.name);
      setLevel(editingSkill.level);
      setOrder(editingSkill.order);
    }
  }, [editingSkill]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillData = { name, level, order };

    if (editingSkill) {
      await api.put(`/skills/${editingSkill._id}`, skillData);
      setEditingSkill(null);
    } else {
      await api.post('/skills', skillData);
    }

    setName('');
    setLevel('');
    setOrder(1);
    fetchSkills();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Level" value={level} onChange={e => setLevel(e.target.value)} required />
      <input type="number" placeholder="Order" value={order} onChange={e => setOrder(Number(e.target.value))} />
      <button type="submit">{editingSkill ? 'Update' : 'Add'} Skill</button>
    </form>
  );
};

export default SkillForm;
