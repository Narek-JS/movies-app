import { useCallback, useContext } from 'react';
import { MoviesContext } from '../providers/MoviesProvider';
import { setSelectedMovieAction } from '../providers/MoviesProvider/actions';

export default function useMovies() {
  const {
    data: { tendingNow, featured, selectedMovie },
    dispatch,
  } = useContext(MoviesContext);

  const setSelectedMovie = useCallback(
    (movieId) => {
      const movie = tendingNow.find((m) => m.Id === movieId);

      dispatch(setSelectedMovieAction(movie));
    },
    [dispatch, tendingNow]
  );

  return { setSelectedMovie, featured, selectedMovie, tendingNow };
}
