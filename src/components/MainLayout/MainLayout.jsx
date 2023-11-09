import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './MainLayout.css'
import Footer from '../Footer/Footer';

const MainLayout = () => {
    const [toggleData, setToggleData] = useState('')
    console.log(toggleData);

    const toggleFunc = (tData) => {
        setToggleData(tData)
    }


    return (
        <div className= {toggleData ? "dark-theme py-16 h-max" : "light-theme h-max py-16"} >
             {/* <video className='w-full h-full' autoPlay muted loop id="background-video">
                    <source src="https://player.vimeo.com/external/563362796.sd.mp4?s=d5c43d15c14eb62e32528d49fe89a198c9ac45b3&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            <div className='w-[80%] backdrop-opacity-0  mx-auto font-poppins '>
                <Navbar tData={toggleFunc}></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default MainLayout;