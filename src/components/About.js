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
      <h2>All you never wanted to know about me</h2>
      <p></p>
      <h3>💬 Communication is a huge part of my life</h3>
      <p>Besides having studied Advertising,
      PR and Branding, I have always focused on connecting with people
      — be it through writing, filmmaking, design, event organization, or anything that I can come up with.</p>
      <h3>🤓 I am always learning something new</h3>
      <p>Norwegian, Swift, an ancient recipe… anything that piques my interest
      and/or helps me become a better version of myself.</p>
      <h3>🥑 Random things that make me happy</h3>
      <p>Hiking with my dog, writing and reading on trains, learning untranslatable words,
      building things that brighten up someone's day, and avocados.</p>
      </div>
    </div>
  </section>
);

export default About;
