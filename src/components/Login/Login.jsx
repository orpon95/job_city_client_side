import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {name}= useContext(authContext)
    console.log(name);
    return (
        <div>
            login
            
        </div>
    );
};

export default Login;