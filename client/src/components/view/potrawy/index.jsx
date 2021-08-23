import React from 'react';
import './styles.scss';

export const Potrawy = () => {
  return (
    <section>
      <article className="danie">
        <div className="imageBox">
          zdjęcie
          <img src="" alt="" className="image" />
        </div>
        <div className="infoBox">
          <h3>jakis tytul</h3>
          <p>description</p>
          <ul className='potrawa__skladniki'>
            <li>skladniki</li>
            <li>skladniki</li>
          </ul>
        </div>
        <div className="opis">Opis</div>
      </article>
    </section>
  );
};
