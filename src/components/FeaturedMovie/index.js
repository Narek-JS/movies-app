import { ButtonUI } from '../ui';
import { MovieContent } from '../MovieContent';
import PlayIcon from '../../assets/icons/Group 57.png';

import classes from './style.module.css';

const FeaturedMovie = ({ movie }) => {
  const { Category, CoverImage, Title, Description, ReleaseYear, MpaRating } = movie;

  return (
    <div className={classes['root']}>
      <div className={classes['bg-wrapper']}>
        <img src={CoverImage} alt={`banner-${Title}`} className={classes['bg-image']} />
      </div>

      <MovieContent
        category={Category}
        title={Title}
        description={Description}
        mpaRating={MpaRating}
        releaseYear={ReleaseYear}
      />

      <div className={classes['wrapper-btn']}>
        <ButtonUI disabled={true} size="lg">
          <img src={PlayIcon} alt={'play icon'} />
          Play
        </ButtonUI>
        <ButtonUI disabled={true} color={'blue'} text="More Info" size="lg" />
      </div>
    </div>
  );
};

export default FeaturedMovie;
