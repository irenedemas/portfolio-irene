import React from 'react';
import Link from 'gatsby-link';

import '../assets/css/main.css';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Guides from '../components/Guides';
import Contact from '../components/Contact';
import Now from '../components/Now';
import Footer from '../components/Footer';
import EmojicomWidget from '../components/EmojicomWidget';

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Guides />
    <Resume />
    <Now />
    <Contact />
    <Footer />
    <EmojicomWidget campaignId='EBlvc46awFpMgDuzkDRs' />
  </div>
);

export default IndexPage;
