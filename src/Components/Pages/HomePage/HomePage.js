// import logo from './logo.svg';
import './HomePage.css';
import React from "react";
import Header from './HomePageComponents/Header/Header'
import Highlights from './HomePageComponents/Highlights/Highlights'
import Programs from './HomePageComponents/Programs/Programs'
import Skills from './HomePageComponents/Skills/Skills'
// import Testimonials from '../../Testimonials/Testimonials'
import Impact from './HomePageComponents/Impact/Impact'
import Sponsorships from './HomePageComponents/Sponsorships/Sponsorships'
import Subscribe from './HomePageComponents/Subscribe/Subscribe'

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
