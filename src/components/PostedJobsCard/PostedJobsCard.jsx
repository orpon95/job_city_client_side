/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../../AuthProvider/AuthProvider';

const PostedJobsCard = ({ cartdata, setLoadedUsers, loadedUsers }) => {
    const { user } = useContext(authContext)
    // console.log("buyer email",user.email );
    const [errors, setError] = useState()
    // console.log(cartdata);
    const { email, categories, deadline, job_title, max_price, min_price, short_description, _id } = cartdata


    // use query star
    const { data:addedData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["onlyFOremai"],
        queryFn: async () => {
            const res = await axios.get(`https://job-city-server.vercel.app/api/v4/employ/getAlladdedJobs?email=${user.email}`, {
                withCredentials: true
            })
            return await res?.data
        }



    })
    // user query end
    console.log("alldata", addedData);
    const filtersData = addedData?.filter(data => data.email == user?.email)
    console.log(filtersData);

    // useEffect(() => {
    //     const filtersData = bidRequestData?.filter(data => data?.bidder_email === user?.email)
    //     console.log("filters data", filtersData);





    // }, [addedData, user.email])




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

                axios.delete(`https://job-city-server.vercel.app/api/v1/employ/deleteJobsCard/${_id}`)
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
        })

    }
    return (
        <div className="  text-center   shadow-xl">
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



                <>
                {
                    filtersData ? 
                    <div className="card-actions justify-center">




                    
                        <Link to={`/update/${_id}`} ><button className="btn  bg-transparent">Update</button></Link>
                        <Link  ><button  onClick={() => handleDelete(_id)} className="btn bg-transparent">Delete</button></Link>
                    
                </div> :
                <div className="card-actions justify-center">




                    
                <Link to={`/update/${_id}`} ><button disabled className="btn btn-primary">Update</button></Link>
                <Link  ><button disabled onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button></Link>
            
        </div>
                }
                
                
                
                
                </>

                {/* <div className="card-actions justify-center">





                    <Link to={`/update/${_id}`} ><button className="btn btn-primary">Update</button></Link>
                    <Link  ><button onClick={() => handleDelete(_id)} className="btn bg-green-400">Delete</button></Link>

                </div> */}
            </div>
        </div>
    );
};

export default PostedJobsCard;