import React, { useState } from 'react';
import { Dania } from '../../templates/danie';

import './styles.scss';

const przystawki = [
  {
    id: 1,
    name: 'Orzeszki w karmelu',
    ingredients: ['Orzeszki', 'Karmel'],
    description: 'Tradycyjna pzystawka przed meczem',
    image:
      'https://images.unsplash.com/photo-1497533922876-a261efd98c5a?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwyNTcxNjIyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    people: 1,
  },
  {
    id: 2,
    name: 'Sałatka',
    ingredients: ['Sałata', 'Cebula'],
    description: 'Na djecie w sam raz',
    image:
      'https://images.unsplash.com/photo-1460667450797-d71a56692010?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    people: 1,
  },
  {
    id: 3,
    name: 'Grzaniec',
    ingredients: ['Wino', 'Pomarańcz'],
    description: 'Super przystawka dla alkoholika',
    image:
      'https://images.unsplash.com/photo-1603048004567-8109c99d4e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    people: 1,
  },
];


export const Przystawki = () => {
  const [data, setData] = useState(przystawki);

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
