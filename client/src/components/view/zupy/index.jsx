import React, { useMemo, useContext } from 'react';
import { Dania } from '../../templates/danie';
import { DaniaContext } from '../../../_context/index';

export const Zupy = () => {
  const { baza, setBaza } = useContext(DaniaContext);

  const dania = useMemo(() => baza.zupy.map((el) => <Dania {...el} />), [baza]);
  console.log(dania, baza);
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
