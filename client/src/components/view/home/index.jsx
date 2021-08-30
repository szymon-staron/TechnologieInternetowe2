import React from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../../../_hooks';
import './styles.scss';

export const Home = () => {
  const { baza } = useGetData();

  return (
    <section className="home">
      <article className="home__article">
        <div className="home__imageBox">
          <img
            className="home__img"
            src="https://images.unsplash.com/photo-1585460379355-de1c92466a17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="obiad"
          />
          <div className="home__wrapper">
            <h3 className="home__title">Dania główne</h3>
            <p>Nasze najczęciej wybierane potrawy.</p>
            <Link to="/dania">
              <button className="home__button">Zobacz sam !!!</button>
            </Link>
          </div>
        </div>
        <div className="home__imageBox">
          <img
            className="home__img"
            src="https://images.unsplash.com/photo-1507758138701-265f359b64ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="obiad"
          />
          <div className="home__wrapper">
            <h3 className="home__title">Przystawki warte uwagi</h3>
            <p>Przed obiadem warto coś przekosić</p>
            <Link to="/przystawki">
              <button className="home__button">Zobacz sam!!!</button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
