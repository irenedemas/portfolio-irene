import React from 'react';
import { FaCloudDownload } from 'react-icons/lib/fa';
import ireneProfile from '../assets/images/ireneProfile.jpg';

const About = () => (
  <section id="guides">
    <div className="row">
      <div className="nine columns main-col">
        <h1>ASK IRENE</h1>
        <h2>Ask Irene is a web app guide that helps you find the perfect spot for any occasion</h2>
        <p>Due to my lifelong obsession for all kinds of food, cozy cafés and cool bathrooms, I have a mental database of spots and always end up recommending places to friends,
                acquaintances and nosy strangers. On <a href="https://www.irene.cool" target="_blank">Ask Irene</a> you can access my wisdom 24/7
                to find the perfect spot for any occasion while I keep hunting the coolest places in
                my hometown Barcelona and anywhere I go.
        </p>
        <a a href="https://www.irene.cool" target="_blank" className="button">ASK IRENE</a>
      </div>
    </div>
  </section>
);

export default About;
