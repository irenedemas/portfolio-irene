import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <section id="contact">
    <div className="row banner">
      <div className="banner-text">
        <h1>DROP ME A LINE</h1>
        <h2>Have strong opinions on X or just wanna say hi? I would love to hear from you.</h2>
        <SocialLinks />
      </div>
    </div>
  </section>
);

export default Banner;
