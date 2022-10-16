import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Home';
import '../index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:movieId',
    element: <HomePage />,
  },
]);

export const App = () => <RouterProvider router={router} />;
