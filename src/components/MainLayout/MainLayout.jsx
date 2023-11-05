import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='w-[80%] mx-auto font-poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;