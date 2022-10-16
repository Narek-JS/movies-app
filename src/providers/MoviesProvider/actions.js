export const Actions = {
  SET_SELECTED_MOVIE: 'SET_SELECTED_MOVIE',
};

export const setSelectedMovieAction = (movie) => {
  return {
    type: Actions.SET_SELECTED_MOVIE,
    payload: { movie },
  };
};
