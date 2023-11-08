import React from 'react';
// import bgvdo from "../../assets../"

const Banner = () => {
    return (
        <div>
            <div className="hero " >
                <video className='w-full h-full' autoPlay muted loop id="background-video">
                    <source className='w-full h-full' src="https://player.vimeo.com/external/563362796.sd.mp4?s=d5c43d15c14eb62e32528d49fe89a198c9ac45b3&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" space-y-1 md:space-y-3">
                        <h1 className=" text-lg  md:text-2xl lg::text-4xl font-bold">Unlock Your Potential. Find Your Dream Job Here</h1>
                        {/* <img src="https://player.vimeo.com/external/563362796.sd.mp4?s=d5c43d15c14eb62e32528d49fe89a198c9ac45b3&profile_id=164&oauth2_token_id=57447761" alt="" /> */}
                        <p className="">At job-city, we re dedicated to connecting talented individuals with their ideal career paths. Our platform offers a wide range of job listings, from entry-level positions to executive roles, in diverse industries. </p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;