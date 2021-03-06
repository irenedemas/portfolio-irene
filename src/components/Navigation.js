import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          IRENE DE MAS
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#product">
          PRODUCT
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#writing">
          WRITING
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#fixations">
          HEAVY FIXATION
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
