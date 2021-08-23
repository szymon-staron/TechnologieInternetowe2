import React, { useState } from 'react';
import { Dania } from '../../templates/danie';

const deser = [
  {
    id: 1,
    name: 'Sernik',
    ingredients: ['Ser', 'Mąka'],
    description: 'Serniczek jak serniczek',
    image:
      'https://media.istockphoto.com/photos/cheesecake-picture-id175195220?s=612x612',
    people: 1,
  },
  {
    id: 2,
    name: 'Szarlotka',
    ingredients: ['Jabłko', 'Mąka'],
    description: 'Najlepsze ciasto z jabłkiem',
    image:
      'https://images.unsplash.com/https://images.unsplash.com/photo-1545396635-011a9a6a5650?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80-1620418029653-f708dd37096a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    people: 1,
  },
  {
    id: 3,
    name: 'Tort',
    ingredients: ['Krem', 'Ciasto'],
    description: 'Tort na święta',
    image:
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=947&q=80',
    people: 1,
  },
];

export const Deser = () => {
  const [data, setData] = useState(deser);

  const dania = data.map((el) => <Dania {...el} />);
  return (
    <section>
      <header></header>
      <article>
        <div></div>
        {dania}
      </article>
    </section>
  );
};
