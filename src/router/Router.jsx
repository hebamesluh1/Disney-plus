import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("../pages/Home"));
const Details = lazy(() => import('../pages/Details'));
const Login = lazy(() => import('../pages/Login'));
const ProtectedRoute = lazy(() => import('../components/protectedRoute'));

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Route>
        </Routes>
    );
};

export default Router;
