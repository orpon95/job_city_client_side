import React from 'react';
import "./About.css"

const AboutUs = () => {
    return (
        <div className='my-8'>
            <h1 className='text-4xl font-bold my-8 text-center'>About us</h1>
            <div className="hero p-6 shadow-2xl shadow-black ">
                <div className="   hero-content gap-16   flex-col lg:flex-row">
                    <img src="https://i.ibb.co/2y9QcnF/pexels-william-fortunato-6140676.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold color-changing-text">Who We are!!!</h1>
                        <p className="py-6">At <span className='text-blue-500 font-bold'>job city</span>, we are passionate about connecting people with their dream careers and helping businesses find the perfect talent. Our mission is to create a seamless bridge between job seekers and employers, making the job search process efficient, enjoyable, and productive. With our innovative platform, we've curated a vast network of opportunities and a community of professionals who are eager to grow and succeed. </p>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;