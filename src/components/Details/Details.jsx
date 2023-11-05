import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Details = () => {
    const { user } = useContext(authContext)

    const alldata = useLoaderData()
    const { id } = useParams()
    // console.log(data);
    console.log(id);


    const singleData = alldata.find(Data => Data?._id === id)
    console.log(singleData);
    const { categories, deadline, job_title, max_price, min_price, short_description, _id, email } = singleData
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
                    <form className=' p-5 shadow-2xl space-y-6 border-2 border-cyan-300 rounded-2xl w-[70%] mx-auto' action="">



                        {/*  price */}
                        <div className='text-center'>
                            <label htmlFor="min-price" className='text-xl font-bold'>price</label>
                            <input type="text" placeholder="price" required name='price' className="border-2 bg-transparent shadow-2xl  border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>
                        {/* deadline */}
                        <div className='text-center'>
                            <label htmlFor="deadline" className='text-xl font-bold'>deadline</label>
                            <input type="date" readOnly required name='deadline' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>
                        {/* bidder email */}
                        <div className='text-center'>
                            <label htmlFor="deadline" className='text-xl font-bold'>Bidder email</label>
                            <input type="email" defaultValue={user?.email} readOnly required name='bidder_email' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                        </div>
                        {/* buyer email */}
                        <div className='text-center'>
                            <label htmlFor="deadline" className='text-xl font-bold'>Buyer email</label>
                            <input type="email" defaultValue={email} readOnly required name='email' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
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