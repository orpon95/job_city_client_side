import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    {/* logo image */}
                    <div className='w-[50px] h-[50px] rounded-full'>
                        <img className='w-full rounded-[50%]' src="https://i.ibb.co/37JVmzJ/download-15.jpg" alt="" />
                    </div>
                    {/* title */}
                    <div className="flex-1 px-2 mx-2 font-poppins font-bold text-lg italic ">Job City</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal flex gap-6 text-lg font-medium underline">
                            {/* Navbar menu content here */}
                            <NavLink to={"/"} > <button className='underline'> Home</button></NavLink>
                            <NavLink to={"addJob"} > <button className='underline'>Add job</button></NavLink>
                            <NavLink to={"myPostedJob"} > <button className='underline'> My Posted job</button></NavLink>
                            <NavLink  to={"myBids"} > <button className='underline'> My Bids</button></NavLink>
                            <NavLink   to={"myBidsRequest"} > <button className='underline'> My Bids request</button></NavLink>
                            <NavLink to={"register"}> <button className='underline'> register</button></NavLink>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                Content
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-5 text-lg text-blue-400">
                    {/* Sidebar content here */}
                    <NavLink to={"/"} > <button className='underline'> Home</button></NavLink>
                    <NavLink to={"/addJob"} > <button className='underline'>Add job</button></NavLink>
                    <NavLink> <button className='underline'> My Posted job</button></NavLink>
                    <NavLink> <button className='underline'> My Bids</button></NavLink>
                    <NavLink> <button className='underline'> My Bids request</button></NavLink>
                    <NavLink> <button className='underline'> register</button></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;