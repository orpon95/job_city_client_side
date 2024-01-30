/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import axios, { Axios } from 'axios';
import "./Navbar.css"

const Navbar = ({tData}) => {
    const nevigate = useNavigate()

    const { user, logOut, googlesign } = useContext(authContext)
    const [loggedinUser, setLoggedInUser] = useState('')
    const email = loggedinUser.email
    // console.log(email);
    // console.log(user);
    // logout
    const handleSignOut = () => {
        logOut()
            .then(() => {
                setLoggedInUser('')
                const loggeduser = { email: user?.email }

                // clear coki start
                axios.post("https://job-city-server.vercel.app/api/v1/jwt/logout", loggeduser, {
                    withCredentials: true
                })
                    .then(res => console.log(res.data))


            })
            .catch(err => console.log(err))
    }

    // googlesign
    const handleGoogle = () => {
        googlesign()
            .then(result => {
                setLoggedInUser(result.user)
                const loggeduser = result.user
                const user = { email }
                // start
                axios.post("https://job-city-server.vercel.app/api/v1/jwt", user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            nevigate(location?.state ? location.state : "/")
                        }
                    })
                    // end
            })
            .catch(err => {
                console.log(err)
            })




    }



    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can save the user's preference in local storage or a state management system.
    };
    tData(darkMode)
    return (
        <div className="drawer shadow-lg mb-6 rounded-lg shadow-black">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="  drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    {/* logo image */}
                    <div className='w-[50px] h-[50px] rounded-full'>
                        <img className='w-full rounded-[50%]' src="https://i.ibb.co/PjDkYcs/png-transparent-career-development-job-application-for-employment-business-career-miscellaneous-trad.png" alt="" />
                    </div>
                    {/* title */}
                    <div className="flex-1  mx-2 font-poppins font-bold text-3xl  italic ">Job City</div>
                    {/* toogle button start */}
                    <label className="switch">
                        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
                        <span className="slider round"></span>
                    </label>


                    {/* toggle button end */}
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal flex flex-col gap-6 text-lg font-medium underline">
                            {/* Navbar menu content here */}
                            <div className='flex gap-6 text-lg font-medium underline'>
                                <NavLink to={"/"} > <button className='underline  hover:bg-red-300 text'> Home</button></NavLink>
                                
                                <NavLink to={"addJob"} > <button className='underline  hover:bg-red-300'>Add job</button></NavLink>
                                <NavLink to={"myPostedJob"} > <button className='underline  hover:bg-red-300'> My Posted job</button></NavLink>
                                <NavLink to={"myBids"} > <button className='underline  hover:bg-red-300'> My Bids</button></NavLink>
                                <NavLink to={"myBidsRequest"} > <button className='underline  hover:bg-red-300'> My Bids request</button></NavLink>
                                <NavLink to={"/chart"} > <button className='underline  hover:bg-red-300 text'> Statistics</button></NavLink>
                            </div>
                            <div>
                                <NavLink to={"register"}> <button className='underline'> register</button></NavLink>

                                {
                                    user ? <button onClick={handleSignOut} className='btn btn-ghost mt-2 underline'> sign out</button> :

                                        // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                                        <NavLink to={"/Login"}><button className='btn btn-ghost underline'> Log in</button></NavLink>


                                }
                                <button className='btn btn-ghost underline' onClick={handleGoogle}>Sign in with google</button>
                                {
                                    user && <div className='flex items-center text-center gap-3'>
                                        <h1 className='underline p-2 rounded-lg font-bold'>
                                            {user?.displayName}
                                        </h1>
                                        <p className='self-center'><img className='w-3/6 h-[40px] rounded-full ' src={user?.photoURL} alt="" /></p>


                                    </div>
                                }
                                {
                                    loggedinUser && <div>
                                        <h1 className='underline p-2 rounded-lg font-bold flex items-center '>
                                            {/* <span> <img src={loggedinUser.photoURL} alt="" /></span> */}
                                            <p><img className='w-3/6 rounded-full' src={loggedinUser.photoURL} alt="" /></p>

                                            {loggedinUser.displayName}
                                        </h1>
                                        {/* <p> pic : <img src={loggedinUser.photoURL} alt="" /> </p> */}
                                    </div>
                                }
                            </div>

                        </ul>
                    </div>
                </div>
                {/* Page content here */}

            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-5 text-lg text-blue-400">
                    {/* Sidebar content here */}
                    <NavLink to={"/"}  > <button className='underline  hover:bg-red-300'> Home</button></NavLink>
                    <NavLink to={"addJob"} > <button className='underline  hover:bg-red-300'>Add job</button></NavLink>
                    <NavLink to={"myPostedJob"}> <button className='underline  hover:bg-red-300'> My Posted job</button></NavLink>
                    <NavLink to={"myBids"}> <button className='underline  hover:bg-red-300'> My Bids</button></NavLink>
                    <NavLink to={"myBidsRequest"} > <button className='underline  hover:bg-red-300'> My Bids request</button></NavLink>
                    <NavLink to={"register"}> <button className='underline  hover:bg-red-300'> register</button></NavLink>
                    <NavLink to={"/chart"} > <button className='underline  hover:bg-red-300 text'> Statistics</button></NavLink>

                    {
                        user ? <button onClick={handleSignOut} className='btn btn-ghost mt-2 underline'> sign out</button> :

                            // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                            <NavLink to={"/Login"}><button className='btn btn-ghost underline'> Log in</button></NavLink>


                    }
                    <button className='btn btn-ghost underline' onClick={handleGoogle}>Sign in with google</button>
                    {
                        user && <div className='flex items-center gap-3'>
                            <h1 className='underline p-2 rounded-lg font-bold'>
                                {user?.displayName}
                            </h1>
                            <p><img className='w-3/6 h-[40px] rounded-full' src={user?.photoURL} alt="" /></p>


                        </div>
                    }
                    {
                        loggedinUser && <div>
                            <h1 className='underline p-2 rounded-lg font-bold flex items-center '>
                                {/* <span> <img src={loggedinUser.photoURL} alt="" /></span> */}
                                <p><img className='w-3/6 rounded-full' src={loggedinUser.photoURL} alt="" /></p>

                                {loggedinUser.displayName}
                            </h1>
                            {/* <p> pic : <img src={loggedinUser.photoURL} alt="" /> </p> */}
                        </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;