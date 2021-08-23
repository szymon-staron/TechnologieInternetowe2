import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export const Dania = ({
  id,
  image,
  name,
  people,
  description,
  ingredients,
}) => {
  return (
    <div key={id} className="soup">
      <div className="imageBox">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="infoBox">
        <h3 className="soup__name">{name}</h3>
        <span className="people">{people}</span>
        <p className="description">{description}</p>
        <ul className="ingredients">
          {ingredients.map((el) => {
            return <li className="each">{el}</li>;
          })}
        </ul>
      </div>
      <div className="btn__box">
        <button className="btn">
          <Link to={`/zupy/${name}`}>Zobacz podglad</Link>
        </button>
      </div>
    </div>
  );
};
