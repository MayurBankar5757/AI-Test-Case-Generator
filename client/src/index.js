// import ReactDOM from 'react-dom/client';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import './index.css';
// import Login from './views/Login/Login';
// import Signup from './views/Signup/Signup';
// import Home from './views/Home/Home';
// import TestCase from './views/TestCase/TestCase';

 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
//   {
//     path: '/testCase',
//     element: <TestCase/>
//   },
// ])

// root.render(<RouterProvider router={router} />);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
