import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx'
import './css/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import Home from './pages/Home';
import Links from './pages/Links';
import NewLink from './pages/NewLink';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
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
