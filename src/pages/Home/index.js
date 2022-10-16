import { useParams } from 'react-router-dom';
import { SideBarView } from '../../components';
import FeaturedMovie from '../../components/FeaturedMovie';
import Carousel from '../../components/Carousel';
import MoviePlayer from '../../components/MoviePlayer';
import useMovies from '../../hooks/useMovies';

import classes from './style.module.css';
import { useEffect } from 'react';

const Home = () => {
  const { movieId } = useParams();
  const { selectedMovie, featured, tendingNow, setSelectedMovie } = useMovies();

  useEffect(() => {
    if(movieId) {
      setSelectedMovie(movieId.slice(1));
    }
  }, [movieId, setSelectedMovie]);

  return (
    <div className={classes['home-page']}>
      {selectedMovie ? <MoviePlayer movie={selectedMovie} /> : <FeaturedMovie movie={featured} />}
      <Carousel movies={tendingNow} />
      <SideBarView />
    </div>
  );
};

export default Home;
