/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PostedJobsCard = ({ cartdata,setLoadedUsers,loadedUsers }) => {
    console.log(cartdata);
    const { email, categories, deadline, job_title, max_price, min_price, short_description, _id } = cartdata



    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )

                axios.delete(`http://localhost:5000/api/v1/employ/deleteJobsCard/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remainingUsers = loadedUsers?.filter(aData => aData._id !== id)
                            setLoadedUsers(remainingUsers)

                        }
                    })


                // fetch(`https://brand-shop-844bnpgxw-yeasins-projects-c520e666.vercel.app/cart/${id}`, {
                //     method: "DELETE"

                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         if (data.deletedCount > 0) {

                //             Swal.fire(
                //                 'Deleted!',
                //                 'Your file has been deleted.',
                //                 'success'
                //             )

                //             const remainingUsers = loadedUsers.filter(aData => aData._id !== id)
                //             setLoadedUsers(remainingUsers)

                //         }
                //     })

            }
        })

    }
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
                    <Link  ><button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostedJobsCard;