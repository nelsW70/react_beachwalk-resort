import React from 'react';
import Hero from '../globals/Hero';
// import aboutImg from '../../images/aboutBcg.jpeg';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui architecto cumque quibusdam ducimus sit maxime."
      />
    </Hero>
  );
};

export default Header;
