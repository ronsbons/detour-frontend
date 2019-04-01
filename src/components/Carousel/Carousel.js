import React, { Component } from 'react';
import Slider from 'react-slick';

// import CSS for react-slick carousel
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.css';

class Carousel extends Component {
  render() {
    const settings = {
      accessibility: true,
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="carousel subtitle is-1 has-text-white">
        <h1 className="company-hero">DeTour</h1>
        <Slider {...settings}>
          {/* slide 1 */}
          <div className="carousel-slide carousel-africa">
            <img src="./images/mike-holford-274691-unsplash.jpg" alt="lion by Mike Holford" />
          </div>

          {/* slide 2 */}
          <div className="carousel-slide carousel-asia">
            <img src="./images/chastagner-thierry-694402-unsplash.jpg" alt="round door by Chastagner Thierry" />
          </div>

          {/* slide 3 */}
          <div className="carousel-slide carousel-aus">
            <img src="./images/alex-wong-46425-unsplash.jpg" alt="view of Sydney Harbour by Alex Wong" />
          </div>

          {/* slide 4 */}
          <div className="carousel-slide carousel-europe">
            <img src="./images/anastasia-dulgier-1155961-unsplash.jpg" alt="houses on a canal by Anastasia Dulgier" />
          </div>

          {/* slide 5 */}
          <div className="carousel-slide carousel-namer">
            <img src="./images/tim-foster-601009-unsplash.jpg" alt="Golden Gate Bridge by Tim Foster" />
          </div>

          {/* slide 6 */}
          <div className="carousel-slide carousel-samer">
            <img src="./images/agustin-diaz-185846-unsplash.jpg" alt="Sugarloaf Mountain by Agustin Diaz" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
