import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <section id="contact">
    <div className="row banner">
      <div className="banner-text">
        <h1>DROP ME A LINE</h1>
        <h2>Don't want to just say hi? Here are some topics I'd love to talk to you about</h2>
        <p>📱 Your new favorite app</p>
        <p>👹 Why you think Comic Sans should (<a href="https://www.mcsweeneys.net/articles/im-comic-sans-asshole" target="_blank">or shouldn't</a>) be a crime</p>
        <p>🍦 The best ice cream in Barcelona — actually, great ice cream anywhere</p>
        <p>💡 Life-changing books, articles, movies, podcasts, artists...</p>
        <p>🐶 <a href="http://www.amodeocristina.com/Dogs-and-Chairs-Thames-Hudson" target="_blank">Chairs that look like dogs</a></p>
      <SocialLinks />
      </div>
    </div>
  </section>
);

export default Banner;
