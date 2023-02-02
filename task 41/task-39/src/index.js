import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Users } from './pages/Users';
import { Albums } from './pages/Albums';
import { Photos } from './pages/Photos';

import '@picocss/pico';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/albums/:userId',
    element: <Albums />,
  },
  {
    path: '/albums/:userId/photos/:albumId',
    element: <Photos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
