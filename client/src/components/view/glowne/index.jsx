
import React, { useState } from 'react';
import { Dania } from '../../templates/danie';

import './styles.scss';

const glowne = [
  {
    id: 1,
    name: 'Burger',
    ingredients: ['Bułka', 'Mięso'],
    description: 'Burgerek z dodatkami',
    image:
      'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    people: 1,
  },
  {
    id: 2,
    name: 'Kurczak w ostrym sosie',
    ingredients: ['Kurczak', 'Ostry sos'],
    description: 'Tradycyjne kurczaczki na ostro',
    image:
      'https://images.unsplash.com/photo-1560717869-37296557a131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    people: 1,
  },
  {
    id: 3,
    name: 'Klopsiki',
    ingredients: ['Mięso', 'Rukola'],
    description: 'Klopsiki jak z ikea',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80://images.unsplash.com/photo-1541095441899-5d96a6da10b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80.com/photos/_y6A9bhILkM',
    people: 1,
  },
];


export const Glowne = () => {
  const [data, setData] = useState(glowne);

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
