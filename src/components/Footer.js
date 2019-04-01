import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer columns">
        <div className="column is-three-quarters">
          <h5 className="subtitle is-6 has-text-centered">Site Map</h5>
          <div className="columns">
            <div className="column">
              <h6 className="subtitle is-6">Africa</h6>
              <Link to="/country" className="is-size-7">Country 1</Link><br />
              <Link to="/country" className="is-size-7">Country 2</Link><br />
              <Link to="/country" className="is-size-7">Country 3</Link><br />
              <Link to="/country" className="is-size-7">Country 4</Link>
            </div>

            <div className="column">
              <h6 className="subtitle is-6">Asia</h6>
              <Link to="/country" className="is-size-7">Country 1</Link><br />
              <Link to="/country" className="is-size-7">Country 2</Link><br />
              <Link to="/country" className="is-size-7">Country 3</Link><br />
              <Link to="/country" className="is-size-7">Country 4</Link>
            </div>

            <div className="column">
              <h6 className="subtitle is-6">Australia</h6>
              <Link to="/country" className="is-size-7">Country 1</Link><br />
              <Link to="/country" className="is-size-7">Country 2</Link><br />
              <Link to="/country" className="is-size-7">Country 3</Link><br />
              <Link to="/country" className="is-size-7">Country 4</Link>
            </div>

            <div className="column">
              <h6 className="subtitle is-6">Europe</h6>
              <Link to="/country" className="is-size-7">Country 1</Link><br />
              <Link to="/country" className="is-size-7">Country 2</Link><br />
              <Link to="/country" className="is-size-7">Country 3</Link><br />
              <Link to="/country" className="is-size-7">Country 4</Link>
            </div>

            <div className="column">
              <h6 className="subtitle is-6">North America</h6>
              <Link to="/country" className="is-size-7">Country 1</Link><br />
              <Link to="/country" className="is-size-7">Country 2</Link><br />
              <Link to="/country" className="is-size-7">Country 3</Link><br />
              <Link to="/country" className="is-size-7">Country 4</Link>
            </div>

            <div className="column">
              <h6 className="subtitle is-6">South America</h6>
              <Link to="/country" className="is-size-7">Country 1</Link><br />
              <Link to="/country" className="is-size-7">Country 2</Link><br />
              <Link to="/country" className="is-size-7">Country 3</Link><br />
              <Link to="/country" className="is-size-7">Country 4</Link>
            </div>
          </div>
        </div>

        <div className="column copyright">
          <p className="is-size-7">&copy; 2019 DeTour</p>
          {/* social icons */}
        </div>
      </div>
    );
  }
}

export default Footer;
