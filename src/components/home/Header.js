import React from 'react';
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg';
import homeImg from '../../images/homeBcg.jpeg';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <h1>hello world</h1>
    </Hero>
  );
};

export default Header;
