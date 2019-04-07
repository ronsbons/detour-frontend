import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="columns">
          <div className="column">
            <figure className="image is-128x128">
              <img src="./images/contiki-logo-vector.svg" alt="Contiki logo" />
            </figure>
            <h4 className="subtitle is-4">Contiki</h4>
          </div>

          <div className="column">
            <figure className="image is-128x128">
              <img src="./images/G Adventures logo.png" alt="G Adventures logo" />
            </figure>
            <h4 className="subtitle is-4">G Adventures</h4>
          </div>

          <div className="column">
            <figure className="image is-128x128">
              <img src="./images/flashpack.png" alt="Flash Pack logo" />
            </figure>
            <h4 className="subtitle is-4">Flash Pack</h4>
          </div>

          <div className="column">
            <figure className="image is-128x128">
              <img src="./images/topdeck-travel-logo.png" alt="Topdeck logo" />
            </figure>
            <h4 className="subtitle is-4">Topdeck</h4>
          </div>
        </div>

        <h3 className="subtitle is-3">DeTour</h3>
        <h5 className="subtitle is-5">De-mystify all of your tour options</h5>
        <p className="has-text-centered">Compare tours from the best companies offering group travel for millennials and Gen Z-ers.</p>
      </div>
    );
  }
}

export default About;
