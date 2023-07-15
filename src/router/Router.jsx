import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from '../pages/Login';

const Router = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
        </Routes>
    );
};

export default Router;
