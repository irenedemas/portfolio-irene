import React from 'react';
import SocialLinks from './SocialLinks';

const About = () => (
  <section id="contact">
    <div className="row">
      <div className="nine columns main-col">
        <h1>DROP ME A LINE</h1>
        <h2>Don't know where to start? These are some things we could talk about</h2>
        <p>💘 Your new favorite app</p>
        <p>👹 Why you think Comic Sans should (<a href="https://www.mcsweeneys.net/articles/im-comic-sans-asshole" target="_blank">or shouldn't</a>) be a crime</p>
        <p>🍦 The best ice cream in Barcelona — actually, great ice cream anywhere</p>
        <p>💡 Life-changing books, articles, movies, podcasts, artists...</p>
        <p>🐶 <a href="http://www.amodeocristina.com/Dogs-and-Chairs-Thames-Hudson" target="_blank">Chairs that look like dogs</a></p>
        <h2>Decided to get in touch?</h2>
        <p>Send me an email to <a href="mailto:im@irene.cool">im@irene.cool</a> or stalk me on Social Media.</p>
        <SocialLinks />
      </div>
    </div>
  </section>
);

export default About;
