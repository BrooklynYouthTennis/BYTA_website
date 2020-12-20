// import logo from './logo.svg';
import './HomePage.css';
import React from "react";
import Header from '../../Components/Header/Header'
import Highlights from '../../Components/Highlights/Highlights'
import Programs from '../../Components/Programs/Programs'
import Skills from '../../Components/Skills/Skills'
// import Testimonials from '../../Testimonials/Testimonials'
import Impact from '../../Components/Impact/Impact'
import Sponsorships from '../../Components/Sponsorships/Sponsorships'
import Subscribe from '../../Components/Subscribe/Subscribe'

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
