import React from 'react';
import { Navigate } from 'react-router-dom';
import { authServices } from '../services/authServices';



const PrivateRoute = ({ children }) => {
    const isAuthenticated = authServices.isAuthenticated();
    return isAuthenticated ? children : <Navigate to={'/login'} />;

};

export default PrivateRoute;