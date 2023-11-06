/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PostedJobsCard = ({data}) => {
    const {email, categories, deadline, job_title, max_price, min_price, short_description, _id } = data
    return (
        <div className="card  text-center  bg-base-100 shadow-xl">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h1>Email : {email}</h1>
                <h2 className="flex justify-center  card-title t"> job categories: {categories}</h2>
                <p>job-title: {job_title}</p>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div> */}
                <h1>min price : {min_price}</h1>
                <h1>max price : {max_price}</h1>
                <h1> Description: {short_description}</h1>
                <h1>application deadline : {deadline} </h1>
                <div className="card-actions justify-center">
                    <Link to={`/update/${_id}`} ><button className="btn btn-primary">Update</button></Link>
                    <Link to={`/delete/${_id}`} ><button className="btn btn-primary">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostedJobsCard;