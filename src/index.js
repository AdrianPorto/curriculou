import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'animate.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Main from "./pages/main"
import Minimalista from "./pages/minimalista"
import Tecnologico from './pages/tecnologico';
import Design from './pages/design';
import Moda from './pages/moda';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "/minimalista",
    element: <Minimalista/>
  },
    {
    path: "/tecnologico",
    element: <Tecnologico/>
  },
        {
    path: "/design",
    element: <Design/>
  },
      {
    path: "/moda",
    element: <Moda/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
