import { useState, useContext } from 'react';
import { DaniaContext } from '../../_context/index';

export const useAddNewMeal = () => {
  const [newMeal, setNewMeal] = useState({
    id: '',
    name: '',
    ingredients: [''],
    description: '',
    image: '',
    category: '',
  });
  const { category } = newMeal;
  const { baza, setBaza } = useContext(DaniaContext);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ingredients') {
      const ingredient = value.split(',');
      return  setNewMeal((prev) => ({
      ...prev,
      [name]: [...ingredient],
    }));
    }
   return setNewMeal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addMealToDb = (e) => {
    e.preventDefault();
    setBaza((prev) => ({
      ...prev,
      [category]: [...prev[category], newMeal],
    }));
  };
  return { newMeal, onChange, addMealToDb };
};
