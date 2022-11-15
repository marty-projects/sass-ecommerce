import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Women from './components/Women'
import Men from './components/Men';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

const router = createBrowserRouter([
  { path: '/', 
    element: <App/>},
  { path: '/women', 
    element: <Women/>},
  { path: '/men', 
    element: <Men/>},
  { path: '/about', 
    element: <About/>},
  { path: '/login', 
    element: <Login/>},
  { path: '/sign-up', 
    element: <Signup/>}
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

