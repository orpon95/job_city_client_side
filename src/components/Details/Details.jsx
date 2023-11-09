import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const { user } = useContext(authContext)
    const nevigate = useNavigate()

    const alldata = useLoaderData()
    const { id } = useParams()
    console.log(alldata);
    console.log(id);


    const singleData = alldata?.find(Data => Data?._id === id)
    console.log("single data",singleData);
    const { categories, deadline, job_title, max_price, min_price, short_description, _id, email } = singleData



    // handle function
    const handleAdd = e => {
        e.preventDefault();
        const form = e.target
        // const email = form?.email?.value ;
        const price = form?.price?.value;
        const deadline = form?.deadline?.value;
        const bidder_email = form?.bidder_email?.value;
        const Buyer_email = form?.Buyer_email?.value || "not given";
        const job_title = form?.job_title?.value || "not given";



        // console.log(image,name,brandName,type,price,short_description,rating_2);
        const biddedJobs = {
             job_title, deadline,price, bidder_email,Buyer_email
        }
        console.log(biddedJobs);
        
        // axios api


        axios.post("https://job-city-server.vercel.app/api/v1/employ/allBiddedJobs",biddedJobs)

            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    nevigate("/myBids")

                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }

            })


    }
    return (
        <div>
            <Helmet>
                <title> Details</title>
            </Helmet>
            <h1 className='text-4xl font-bold my-8 text-center'> Details</h1>
            <div className="card   shadow-xl shadow-black my-6 py-6">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body shadow-xl text-center shadow-fuchsia-200 w[50%] mx-auto">

                    <p className='text-2xl font-bold'>job-title: <span className='text-lg font-medium'>{job_title}</span> </p>

                    <h1 className='text-2xl font-bold'>Price Range: <span className='text-lg font-medium'>{min_price} - {max_price}</span> </h1>
                    <h1 className='text-2xl font-bold'> Description: <span className='text-lg font-medium'>{short_description}</span> </h1>
                    <h1 className='text-2xl font-bold'>application deadline : <span className='text-lg font-medium'>{deadline}</span> </h1>
                   
                </div>


                <h1 className='text-4xl text-center font-bold my-9'>Place your bid </h1>

                {/* place your form */}

                <div className='my-11'>
                    <form onSubmit={handleAdd} className=' p-5 shadow-2xl space-y-6 border-2 border-cyan-300 rounded-2xl w-[70%] mx-auto' action="">



                        {/*  price */}
                        <div className='text-center'>
                            <label htmlFor="price" className='text-xl font-bold'>price</label>
                            <input type="text" placeholder="your bidding amount" required name='price' className="border-2 bg-transparent shadow-2xl  border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>
                        {/* deadline */}
                        <div className='text-center'>
                            <label htmlFor="deadline" className='text-xl font-bold'>deadline</label>
                            <input type="date"  required name='deadline' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>
                        {/* title of job */}
                        <div className='text-center'>
                            <label htmlFor="job-title" className='text-xl font-bold mx-3'>job-title</label>
                            <select
                                className='border-2 bg-transparent shadow-2xl  border-cyan-300 p-3 flex-1'

                                name="job_title"
                                required


                            >
                                <option className='bg-red-400' value="junoir web developer">junoir web developer</option>
                                <option value="senior web developer">senior web developer</option>
                                <option value="junior graphics designer">junior graphics designer</option>
                                <option value=" it manager"> it manager</option>
                                <option value="assistant marketing manager"> assistant marketing manager</option>
                                <option value="it assistant"> it assistant</option>
                                <option value="senior graphics designer">senior graphics designer</option>
                                <option value="visual designer">visual designer</option>
                                <option value="brand marketer">brand marketer</option>
                                <option value="social media analysist">social media analysist</option>
                                <option value="ui\ux designer">ui\ux designer</option>

                            </select><br />
                        </div>
                        {/* bidder email */}
                        <div className='text-center'>
                            <label htmlFor="deadline" className='text-xl font-bold'>Bidder email</label>
                            <input type="email" defaultValue={user?.email} readOnly required name='bidder_email' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>
                        {/* buyer email */}
                        <div className='text-center'>
                            <label htmlFor="Buyer_email" className='text-xl font-bold'>Buyer email</label>
                            <input type="email" defaultValue={email} readOnly required name='Buyer_email' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>

                        <div className='text-center'>

                            {
                                user?.email == email ?
                                 <button disabled type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  >

                                Bid On the project </button> :
                                <button type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  >

                                Bid On the project </button>
                            }
                            {/* <button type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  >

                                Bid On the project </button> */}

                        </div>

                    </form>

                </div>
            </div>
        </div>
        // <div>
        //     hi
        // </div>
    );
};

export default Details;