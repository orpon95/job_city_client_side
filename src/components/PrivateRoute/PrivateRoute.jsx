/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { user, loading } = useContext(authContext)
    if (user) {
        return children
    }
    if (loading) {
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    // return <Navigate state={location.pathname} to={"/Login"} ></Navigate>
   return <Navigate state={location.pathname} to={"/Login"}  ></Navigate>
};

export default PrivateRoute;