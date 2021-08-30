import React, { useContext } from 'react';
import { Dania } from '../../templates/danie';
import { DaniaContext } from '../../../_context/index';

export const Deser = () => {
  const { baza } = useContext(DaniaContext);

  const dania = baza.desery.map((el) => <Dania {...el} />);
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
