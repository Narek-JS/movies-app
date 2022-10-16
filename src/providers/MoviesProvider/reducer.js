import { Actions } from './actions';

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_SELECTED_MOVIE: {
      return { ...state, selectedMovie: payload.movie };
    }
    default:
      return { ...state };
  }
};
