import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import ireneProfile from "../assets/images/ireneProfile.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={ireneProfile} alt="" />
      </div>
      <div className="nine columns main-col">
      <h1>IRENE DE MAS</h1>
      <p></p>
      <h2>💬 Communication is a huge part of my life</h2>
      <p>Besides having studied Advertising,
      PR and Branding, I have always focused on connecting with people
      — be it through writing, filmmaking, design, event organization, or anything that I can come up with.</p>
      <h2>🤓 I'm always learning something new</h2>
      <p>Norwegian, Swift, an ancient recipe… anything that piques my interest
      and/or helps me become a better version of myself.</p>
      <h2>🥑 Random things that make me happy</h2>
      <p>Hiking with my dog, writing and reading on trains, learning untranslatable words,
      building things that brighten up someone's day, and avocados.</p>
      </div>
    </div>
  </section>
);

export default About;
