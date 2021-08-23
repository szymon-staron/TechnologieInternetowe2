import React, { useState } from 'react';
import { Dania } from '../../templates/danie';

const zupy = [
  {
    id: 1,
    name: 'Rosół',
    ingredients: ['Woda', 'Makaron'],
    description: 'Tradycyjna zupka na niedziele',
    image:
      'https://images.unsplash.com/photo-1612966948332-81d747414a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    people: 1,
  },
  {
    id: 2,
    name: 'Pomidorowa',
    ingredients: ['Pomidor', 'Makaron'],
    description: 'Zupa robiona z tego co zostało z niedzieli',
    image:
      'https://images.unsplash.com/photo-1620418029653-f708dd37096a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    people: 1,
  },
   {
    id: 3,
    name: 'Dyniowa',
    ingredients: ['Dynia', 'Woda'],
    description: 'Zupa krem z dyni',
    image:
       'https://images.unsplash.com/photo-1541095441899-5d96a6da10b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80.com/photos/_y6A9bhILkM',
     people: 1,
  },
];

export const Zupy = () => {
  const [data, setData] = useState(zupy);

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
