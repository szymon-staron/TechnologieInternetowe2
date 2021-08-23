import React from 'react';
import { Footer,Nav } from '../index';
import './styles.scss';

export const MainLayout = ({children}) => {
  return <section className='mainLayout'>
    <Nav />
    <article className='mainLayout__content'>
    {children}
    </article>
    <Footer/>
  </section>
}