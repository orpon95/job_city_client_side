/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const JobCard = ({ data }) => {
    console.log(data);
    const { categories, deadline, job_title, max_price, min_price, short_description, _id } = data
    return (
        <div  className=" border-2 border-r-blue-400 rounded-lg bg-transparent shadow-xl">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title"> job categories: {categories}</h2>
                <p>job-title: {job_title}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                <h1>Estimated sellary: {min_price} - {max_price}</h1>
                <h1> Description: {short_description}</h1>
                <h1>application deadline : {deadline} </h1>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`} ><button className="btn bg-transparent">Bid Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;