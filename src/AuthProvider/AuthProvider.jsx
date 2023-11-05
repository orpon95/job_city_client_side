/* eslint-disable react/prop-types */
import React, {  createContext } from 'react';


export const  authContext = createContext(null)

const AuthProvider = ({children}) => {

  
    const AuthInfo = {
        name:"arafat"
    }
    return (
        // <authContext.Provider value={AuthInfo}>
        //     {children}
        // </authContext.Provider>
        <authContext.Provider value={AuthInfo} >
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;