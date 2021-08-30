import React, { useContext } from 'react';
import { Dania } from '../../templates/danie';
import { DaniaContext } from '../../../_context/index';
import './styles.scss';

export const Glowne = () => {
  const { baza } = useContext(DaniaContext);

  const dania = baza.daniaGlowne.map((el) => <Dania {...el} />);
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
