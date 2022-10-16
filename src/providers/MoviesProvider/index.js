import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import jsonData from '../../data.json';

export const MoviesContext = createContext(null);

const status = jsonData.Featured && jsonData.TendingNow ? 'success' : '';

const initialState = {
  featured: jsonData.Featured,
  tendingNow: jsonData.TendingNow,
  selectedMovie: null,
  status, // failed, success, pending
  loading: false,
};

export const MoviesProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return <MoviesContext.Provider value={{ data, dispatch }}>{children}</MoviesContext.Provider>;
};
