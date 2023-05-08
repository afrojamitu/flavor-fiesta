import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Recipe from '../Pages/Recipe/Recipe';
import Blog from '../Pages/Blog/Blog';
import PrivateRoute from './PrivateRoute';
import Error from '../Pages/Error/Error';

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({params}) => fetch(`https://flavor-fiesta-server.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;