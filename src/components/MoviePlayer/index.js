import { useRef } from 'react';
import { MovieContent } from '../MovieContent';
import { ButtonUI } from '../ui';
import PlayIcon from '../../assets/icons/Group 57.png';

import classes from './style.module.css';

const MoviePlayer = ({ movie }) => {
  const { Category, VideoUrl, Title, Description, ReleaseYear, MpaRating } = movie;
  const fullScreenVideoRef = useRef(null);

  const play = (event) => {
    alert( 'oooo' );
  };

  const seeMoreInfo = (event) => {
    alert( 'oooo' );
  };

  return (
    <div className={classes['root']}>
      <div className={classes['bg-wrapper']}>
        <video
          muted
          autoPlay
          loop
          controls
          id="full-screenVideo"
          ref={fullScreenVideoRef}
        >
          <source src={VideoUrl} type="video/mp4"/>
        </video>
      </div>

      <MovieContent
        category={Category}
        title={Title}
        description={Description}
        mpaRating={MpaRating}
        releaseYear={ReleaseYear}
      />

      <div className={classes['wrapper-btn']}>
        <ButtonUI handleclick={play} size="lg">
          <img src={PlayIcon} alt={'play icon'} />
          Play
        </ButtonUI>
        <ButtonUI handleclick={seeMoreInfo} color={'blue'} text="More Info" size="lg" />
      </div>
    </div>
  );
};

export default MoviePlayer;
