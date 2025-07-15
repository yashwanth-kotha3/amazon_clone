// src/HomeCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomeCarousel.css';

function HomeCarousel() {
  return (
    <Carousel className='carousel__image'
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={700}
    >
      <div>
        <img src="https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" />
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
