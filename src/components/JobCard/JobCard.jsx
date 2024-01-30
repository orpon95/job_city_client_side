/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const JobCard = ({ data }) => {
    // AOS.refresh();
    console.log(data);
    const { categories, deadline, job_title, max_price, min_price, short_description, _id } = data
    return (
        <div   className=" text-black border-2 border-r-blue-400 rounded-lg bg-transparent  shadow-xl shadow-black  h-[650px]">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title text-2xl text-center"> job categories: </h2>  <span className='text-lg  font-medium'>{categories}</span>
                <p className='text-2xl font-bold'> job-title:<span className='text-lg font-medium'> <br /> {job_title}</span> </p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                <h1 className='text-2xl font-bold'>Estimated sellary: <br /> <span  className='text-lg font-medium'>{min_price} - {max_price}</span></h1>
                <h1 className='text-2xl font-bold'> Description: <br /> <span className='text-lg font-medium'>{short_description}</span></h1>
                <h1 className='text-2xl font-bold'>application deadline : <br /> <span className='text-lg font-medium'>{deadline}</span> </h1>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`} ><button className="btn bg-transparent">Bid Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;