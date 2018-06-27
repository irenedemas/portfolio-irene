import React from 'react';
import Link from 'gatsby-link';

import '../assets/css/main.css';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Guides from '../components/Guides';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Guides />
    <Resume />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
