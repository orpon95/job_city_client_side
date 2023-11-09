import React, { useContext, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const nevigate = useNavigate()
    const location = useLocation()
    const [errors, setError] = useState()
    const { signin } = useContext(authContext)
    console.log(name);




    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        // const name = form.get("name")
        console.log(email, password, name)


        // setError("")
        signin(email, password)
            .then(result => {
                const loggeduser = result.user
                const user = { email }
                // token start
                axios.post("https://job-city-server.vercel.app/api/v1/jwt", user, {
                    withCredentials: true
                })
                    .then(res =>  {
                        console.log(res.data)
                        if (res.data.success) {
                            nevigate(location?.state ? location.state : "/")
                        }
                    }
                    )
                    // token end

                console.log("loggen in user", result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucessfully Logged in',
                    showConfirmButton: false,
                    timer: 1500
                })

                // nevigate(location?.state ? location.state : "/")

            })
            .catch(err => {
                setError(err.message)
                Swal.fire({
                    title: `${errors}`,
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })

            })





    }












    return (
        <div>
            <Helmet>
                <title> Login</title>
            </Helmet>


            <h1 className="text-5xl font-bold text-center my-5">Log In here!!!</h1>
            <div className="hero min-h-screen ">

                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">


                            {/* email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* button */}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='my-5'>
                            <h1 className='text-center'>New Here!!!
                                <Link to={"/Register"} ><span className='text-base text-blue-600 underline'> register here</span></Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;