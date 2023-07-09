import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register/index.jsx';
import Home from './pages/Home';
import Links from './pages/Links';
import NewLink from './pages/NewLink';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/links",
    element: <Links />,
  },
  {
    path: "/new-link",
    element: <NewLink />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)