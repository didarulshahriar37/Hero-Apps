import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Root from '../Pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            path: '/',
            loader: () => fetch('/trendingApps.json'),
            Component: Home
        }
    ]
  },
]);