import React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet'

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
    <Helmet>
        <script>{`window.EMOJICOM_WIDGET = { campaign: "EBlvc46awFpMgDuzkDRs" };`}</script>
        <script src="https://cdn.emojicom.io/embed/widget.js" async></script>
    </Helmet>
  </div>
);

export default IndexPage;
