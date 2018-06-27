import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">

        <ul className="copyright">
          <li>
            Proudly built by <a href="https://www.linkedin.com/in/irenedemas/" target="_blank">Irene de Mas</a> with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby ⚛️</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
