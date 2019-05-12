import React from 'react';
import Link from 'gatsby-link';

import '../assets/css/main.css';

import Header from '../components/Header';
import About from '../components/About';
import Writing from '../components/Writing';
import Product from '../components/Product';
import Contact from '../components/Contact';
import Fixations from '../components/Fixations';
import Footer from '../components/Footer';
import EmojicomWidget from '../components/EmojicomWidget';

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Product />
    <Writing />
    <Fixations />
    <Contact />
    <Footer />
    <EmojicomWidget campaignId='EBlvc46awFpMgDuzkDRs' />
  </div>
);

export default IndexPage;
