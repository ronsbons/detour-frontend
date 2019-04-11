import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="columns is-multiline">
          <div className="column is-half-mobile">
            <figure className="image is-128x128">
              <img src="./images/contiki-logo-vector.svg" alt="Contiki logo" />
            </figure>
          </div>

          <div className="column is-half-mobile">
            <figure className="image is-128x128">
              <img src="./images/g-adventures-logo.png" alt="G Adventures logo" />
            </figure>
          </div>

          <div className="column is-half-mobile">
            <figure className="image is-128x128">
              <img src="./images/flashpack.png" alt="Flash Pack logo" />
            </figure>
          </div>

          <div className="column is-half-mobile">
            <figure className="image is-128x128">
              <img src="./images/topdeck-logo.png" alt="Topdeck logo" />
            </figure>
          </div>
        </div>

        <h1 className="title is-1 about-title">DeTour</h1>
        <h4 className="subtitle is-4 about-subtitle">De-mystify all of your tour options</h4>
        <div className="about-summary">
          <h5 className="subtitle is-5">Compare tours from the best companies offering group travel for millennials and Gen Z-ers.</h5>
          <p className="has-text-centered">Join our community of travelers to share your experiences on a certain tour and to bookmark a tour to your Wish List.</p>
        </div>
      </div>
    );
  }
}

export default About;
