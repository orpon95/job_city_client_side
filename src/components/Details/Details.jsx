import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Details = () => {
    const { user } = useContext(authContext)
    const nevigate = useNavigate()

    const alldata = useLoaderData()
    const { id } = useParams()
    // console.log(data);
    console.log(id);


    const singleData = alldata?.find(Data => Data?._id === id)
    console.log(singleData);
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


        axios.post("http://localhost:5000/api/v1/employ/allBiddedJobs",biddedJobs)

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
            <h1>details</h1>
            <div className="card  bg-base-100 shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">

                    <p>job-title: {job_title}</p>

                    <h1>Price Range: {min_price} - {max_price}</h1>
                    <h1> Description: {short_description}</h1>
                    <h1>application deadline : {deadline} </h1>
                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`} ><button className="btn btn-primary">Bid Now</button></Link>
                    </div>
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
                            <input type="date" readOnly required name='deadline' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
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

                            {/* {
                                user?.email == email ?
                                 <button disabled type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  >

                                Bid On the project </button> :
                                <button type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  >

                                Bid On the project </button>
                            } */}
                            <button type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  >

                                Bid On the project </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Details;