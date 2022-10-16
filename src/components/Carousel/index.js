import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './style.module.css';

const settings = {
  swipeToSlide: true,
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 1,
};

const CarouselView = ({ movies }) => {
  return (
    <div className={classes['carousel-root']}>
      <Slider {...settings}>
        {movies.map((slide) => {
          const { CoverImage, Title, Id } = slide;

          return (
            <Link className={classes.slide} key={Id} to={`/:${Id}`}>
              <div className={classes.cardRoot}>
                <img src={CoverImage} alt={`cover of ${Title}`} style={{ objectFit: 'cover' }} />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselView;
