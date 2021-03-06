import React, { Component } from 'react';
import Slider from 'react-slick';

// import CSS for react-slick carousel
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

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
          </div>

          {/* slide 2 */}
          <div className="carousel-slide carousel-asia">
          </div>

          {/* slide 3 */}
          <div className="carousel-slide carousel-aus">
          </div>

          {/* slide 4 */}
          <div className="carousel-slide carousel-europe">
          </div>

          {/* slide 5 */}
          <div className="carousel-slide carousel-namer">
          </div>

          {/* slide 6 */}
          <div className="carousel-slide carousel-samer">
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
