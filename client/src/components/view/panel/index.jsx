import React from 'react';
import { useAddNewMeal } from '../../../_hooks';
import './styles.scss';

export const Panel = () => {
  const { newMeal, onChange, addMealToDb } = useAddNewMeal();
  return (
    <section className="admin__panel">
      <header>
        <h3>Panel</h3>
      </header>
      <article>
        <form>
          <div>
            <label>Nazwa</label>
            <input
              {...{ type: 'text', name: 'name', value: newMeal.name, onChange }}
            />
          </div>
          <div>
            <label>Zdjęcie</label>
            <input
              {...{
                type: 'text',
                name: 'image',
                value: newMeal.image,
                onChange,
              }}
            />
          </div>
          <div>
            <label>kategoria</label>
            <input
              {...{
                type: 'text',
                name: 'category',
                value: newMeal.category,
                onChange,
              }}
            />
          </div>
          <div>
            <label>składniki</label>
            <input
              {...{
                type: 'text',
                name: 'ingredients',
                value: newMeal.ingredients,
                onChange,
              }}
            />
          </div>
          <div>
            <label>Opis</label>
            <textarea
              {...{ name: 'description', value: newMeal.description, onChange }}
            />
          </div>
          <div>
            <button onClick={addMealToDb}>Dodaj</button>
          </div>
        </form>
      </article>
    </section>
  );
};
