import React from 'react';
import { Route } from 'react-router';
import { Register } from '../features/auth/Register';
import { Login } from '../features/auth/Login';

const AuthRoutes = () => {
    return (
         <>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </>
    );
};

export default AuthRoutes;