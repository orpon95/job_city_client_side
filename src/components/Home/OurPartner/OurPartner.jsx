import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const OurPartner = () => {
    return (
        <div className='my-8 '>
            <h1 className='text-4xl font-bold my-8 text-center'> Our Partner</h1>
            <div className=' shadow-2xl  flex flex-wrap gap-4 p-5 justify-between my-4 ' >

                <div className='w-56 h-44 shadow-xl border-2  rounded-lg'>
                   <img className='w-full rounded-lg hero-overlay opacity-80' src="https://i.ibb.co/z7nF0PZ/envato-new-20208156.jpg" alt="" />

                </div>
                <div className='w-56 h-44  shadow-xl rounded-lg'>
                    <img className=' rounded-lg hero-overlay  w-full' src="https://i.ibb.co/30S6Rw2/IREX-Logo-Color-H.png" alt="" />

                </div>
                <div className=' w-56 h-44 shadow-xl  rounded-lg'>
                    <img className=' rounded-lg hero-overlay  w-full' src="https://i.ibb.co/ZXRtJsn/24354.png" alt="" />

                </div>
            </div>

        </div>
    );
};

export default OurPartner;