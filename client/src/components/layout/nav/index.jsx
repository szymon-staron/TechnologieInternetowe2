import React from 'react';
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { AiOutlineLock } from "react-icons/ai";
import "./styles.scss";

export const Nav = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__logo">
          <Link to='/'><IoFastFood size="4em" /></Link>
        </div>
        <div>
          <ul className="navigation__links">
            <li className="navigation__link">
              <Link to="/przystawki">Przystawki</Link>
            </li>
            <li className="navigation__link">
              <Link to="/dania">Dania główne</Link>
            </li>
            <li className="navigation__link">
              <Link to="/zupy">Zupy</Link>
            </li>
            <li className="navigation__link">
              <Link to="/desery">Desery</Link>
            </li>
          </ul>
        </div>
        <div className='navigation__account'>
          <Link to='/konto'> <AiOutlineLock size="4em" /></Link>

        </div>
      </nav>
    </header>

  );

}