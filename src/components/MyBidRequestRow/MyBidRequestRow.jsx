/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MyBidRequestRow = ({ data }) => {
    const { job_title, deadline, price, bidder_email, Buyer_email, _id, status } = data
    // reject button handler
    const handleReject = (id) => {
        const rejectmsg = { status: "rejected" }
        axios.patch(`http://localhost:5000/api/v1/employ/getAllBiddedJobs/${id}`, rejectmsg)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // refetch();
                   
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
    // accept button handler
    const handleAccept = (id) => {
        const acceptmsg = { status: "accepted" }
        axios.patch(`http://localhost:5000/api/v1/employ/getAllBiddedJobs/${id}`, acceptmsg)
            .then(res => {

                if (res?.data?.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // refetch();
                   
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
            <td> {price} </td>
            <td> 
                {
                    status == "rejected" ? "rejected" : "pending"
                }
                
                
                
                
                </td>
            <th> <button onClick={() => handleAccept(_id)} className='btn-ghost'> accept</button> </th>
            <th> <button onClick={() => handleReject(_id)} className='btn-ghost'> reject</button> </th>
        </tr>
    );
};

export default MyBidRequestRow;