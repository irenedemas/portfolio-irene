import React from "react";

const Work = () => (
    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>
            <a href="https://www.finnishdesignshop.com/design-stories/" target="_blank">DESIGN STORIES</a>
          </span>
        </h1>
        <p>Pieces of Nordic happiness 🕯️</p>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
            <div className="twelve columns">
                <h3 className="info">
                <a href="https://www.finnishdesignshop.com/design-stories/trending/design-lover-watch-these-films" target="_blank">Films for Design Lovers</a>
                <span />
                <em className="date">Top picks for binge-watching designers</em>
                </h3>
            </div>
        </div>

        <div className="row item">
            <div className="twelve columns">
                <h3 className="info">
                <a href="https://www.finnishdesignshop.com/design-stories/travel/barcelona-top-3-restaurants-for-design-lovers" target="_blank">Restaurants for Design Lovers</a>
                <span />
                <em className="date">Great design, even better food</em>
                </h3>
            </div>
        </div>
      </div>
    </div>
);

export default Work;
