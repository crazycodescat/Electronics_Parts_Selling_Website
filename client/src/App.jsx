import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Main/HomePage';
import Part from './pages/Main/Part';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: 'true',
        element: <HomePage />,
      },
      {
        path: '/api/part',
        element: <Part />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
