import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="columns">
          <div className="column">
            <img src="./images/contiki-logo-vector.svg" />
            <h4 className="subtitle is-4">Contiki</h4>
          </div>

          <div className="column">
            <img src="./images/g-adventures-seeklogo.com.svg" />
            <h4 className="subtitle is-4">G Adventures</h4>
          </div>

          <div className="column">
            <img src="./images/g-adventures-seeklogo.com.svg" />
            <h4 className="subtitle is-4">Flash Pack</h4>
          </div>

          <div className="column">
            <img src="./images/g-adventures-seeklogo.com.svg" />
            <h4 className="subtitle is-4">Top Deck</h4>
          </div>
        </div>

        <h3 className="subtitle is-3">DeTour</h3>
        <h5 className="subtitle is-5">De-mystify all of your tour options</h5>
        <p className="has-text-centered">Compare tours from the best companies offering group travel for 18-35 year olds or for 18-35 year olds at heart.</p>
      </div>
    );
  }
}

export default About;
