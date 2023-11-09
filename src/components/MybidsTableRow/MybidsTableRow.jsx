/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MybidsTableRow = ({ data,refetch }) => {
    // const {user}= data
    const { job_title, deadline, price, bidder_email, Buyer_email, _id, status, complete_status } = data
    // console.log(refetch);

    // accept button handler
    const handleComplete = (id) => {
        const confirmedMsg = { status: "completed" }
        axios.patch(`https://job-city-server.vercel.app/api/v2/employ/getAllBiddedJobs/${id}`, confirmedMsg)
            .then(res => {
                console.log(res.data);
                // reFetch()
                if (res?.data?.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    refetch();
                   
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


        <tr>
            <th> {job_title} </th>
            <td> {bidder_email} </td>
            <td> {deadline} </td>



            {
                complete_status == "completed" ? <td>completed</td> :


                    <td> {

                        status == "rejected" ? "cencelled" :

                            status == "accepted" ? "in_Progress" :

                                // complete_status == "completed" ? "completed" :

                                "pending"

                    }

                    </td>

            }

            {/* {

                complete_status == "completed" ? <td><button disabled className='btn bg-red-500 text-yellow-300'> complete</button></td> :

                    <td>
                        {
                            status !== "accepted" ?
                                <button disabled className='btn bg-pink-600 text-yellow-300'> complete</button> :
                                // complete_status == "completed" ?
                                // <button disabled className='btn-warning text-yellow-300'> complete</button> :


                                <button onClick={() => handleComplete(_id)} className='btn bg-blue-900 '> complete</button>
                        }




                    </td>
            } */}








            <td>
                {
                    status == "accepted" ?
                    // complete_status== "completed"  ?
                        <button onClick={() => handleComplete(_id)}  className='btn bg-red-500 text-yellow-300'> complete</button> :
                        // complete_status == "completed" ?
                        // <button disabled className='btn-warning text-yellow-300'> complete</button> :
                        status == "rejected" ?


                        <button disabled  className='btn bg-green-900 text-red-500'> complete</button>
                         :
                         <button disabled  className='btn bg-green-900 text-red-500'> complete</button>
                        

                }




            </td>
        </tr>


    );
};

export default MybidsTableRow;