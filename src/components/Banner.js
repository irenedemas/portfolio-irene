import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hello!</h1>
      <h3>
      I'm Irene de Mas,<br />Product Owner, Project Manager & Freelance Writer from Barcelona
      </h3>
      <SocialLinks />
      <h3>👆 Say hi or keep scrolling 👇</h3>
    </div>
  </div>
);

export default Banner;
