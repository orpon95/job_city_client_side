import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" my-5 shadow-2xl shadow-black footer p-10  text-neutral-content">
                <nav className='flex justify-center items-center'>
                    <span className='w-[50px] h-[50px] rounded-full'><img className='w-full rounded-[50%]' src="https://i.ibb.co/PjDkYcs/png-transparent-career-development-job-application-for-employment-business-career-miscellaneous-trad.png" alt="" /></span>
                    <span className='mx-2 font-poppins font-bold text-3xl  italic'>Job city</span>
                </nav>
                <nav>
                    <header className="footer-title">contact information</header>
                    <a className="link link-hover">sayedabad,80\c,dhaka</a>
                    <a className="link link-hover">call:02154545</a>
                    <a className="link link-hover text-red-700">email:job-city@gmail.com</a>
                    {/* <a className="link link-hover">Advertisement</a> */}
                </nav>
                <nav>
                    <header className="footer-title">social media links</header>
                    <a className="link link-hover">facebook</a>
                    <a className="link link-hover">twiter</a>
                    <a className="link link-hover">instagram</a>
                    {/* <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;