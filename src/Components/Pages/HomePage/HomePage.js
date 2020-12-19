// import logo from './logo.svg';
import './HomePage.css';
import React from "react";
import Header from '../../Header/Header'
import Highlights from '../../Highlights/Highlights'
import Programs from '../../Programs/Programs'
import Skills from '../../Skills/Skills'
// import Testimonials from '../../Testimonials/Testimonials'
import Impact from '../../Impact/Impact'
import Sponsorships from '../../Sponsorships/Sponsorships'
import Subscribe from '../../Subscribe/Subscribe'

function HomePage() {
  return (
    <>
      <Header />
      <Highlights />
      <Programs />
      <Skills />
      {/* <Testimonials /> */}
      <Impact />
      <Sponsorships />
      <Subscribe />
    </>
  );
}

export default HomePage;
