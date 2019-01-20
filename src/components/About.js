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
        <h2>My life is guided by two simple but powerful principles</h2>
        <h2>🚀 Work Hard</h2>
        <p>As soon as I finish a project, I start creating something new — an app, a feature, an article, you name it. <a href="http://bit.ly/happierapps" target="_blank">A deep respect for well-designed products</a> brought me to <a href="https://medium.com/ironhack/coding-is-cheaper-than-therapy-a9448e43e54a" target="_blank">web and iOS development</a>, UX Research, UI Design...
        until I ended up building my own things.
        The most challenging project so far has been the web app <a href="https://irenedemas.com/#guides">Ask Irene</a>,
        where I put into practice all I know (and keep learning) about Product Design.</p>

        <h2>🤗 Be Nice to People</h2>
        <p>I have always focused on connecting with people — be it through design, writing, filmmaking, or anything I can come up with.
        Want to know more about this philosophy? I published an essay on <a href="https://medium.com/@irenedemas/strong-to-be-kind-5c7514b5cde2" target="_blank">self-improvement, working hard and being nice to people</a>.</p>
        <h2>... and random things that make me happy</h2>
        <p>Hiking with my dog, listening to podcasts on trains, learning untranslatable words,
      building things that brighten up someone's day, and avocados.</p>
      </div>
    </div>
  </section>
);

export default About;
