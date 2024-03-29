import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaMedium,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:irenedemasc@gmail.com">
        <FaPaperPlane />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@irenedemas" target="_blank">
        <FaMedium />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/irenedemas/" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/irenedemas/" target="_blank">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
