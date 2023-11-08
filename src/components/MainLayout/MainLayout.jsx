import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './MainLayout.css'
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className='dark-theme p-20  ' >
             {/* <video className='w-full h-full' autoPlay muted loop id="background-video">
                    <source src="https://player.vimeo.com/external/563362796.sd.mp4?s=d5c43d15c14eb62e32528d49fe89a198c9ac45b3&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            <div className='w-[80%]  mx-auto font-poppins '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default MainLayout;