import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Roadmap from '../components/Roadmap';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/Roadmap/Data';
import Utility from '../components/Utility';
import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Roadmap {...homeObjOne} />
      <Roadmap {...homeObjTwo} />
      <Utility />
      <Roadmap {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
