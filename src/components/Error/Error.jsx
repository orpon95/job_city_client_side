import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-red-400 text-center font-extrabold text-5xl justify-center">OOPs !!! ERROR </h2>
                <Link to={"/"}><button className='btn btn-secondary my-4'>Go Home</button></Link>
                
                
            </div>
        </div>

    </div>
    );
};

export default Error;