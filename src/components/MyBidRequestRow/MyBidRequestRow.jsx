/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import Progressbar from '../Progressbar/Progressbar';
import { authContext } from '../../AuthProvider/AuthProvider';

const MyBidRequestRow = ({ data, refetch }) => {
    const { user } = useContext(authContext)
    const { job_title, deadline, price, bidder_email, Buyer_email, _id, status } = data
    // reject button handler
    const handleReject = (id) => {
        const rejectmsg = { status: "rejected" }
        axios.patch(`https://job-city-server.vercel.app/api/v1/employ/getAllBiddedJobs/${id}`, rejectmsg)
            .then(res => {
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
    // accept button handler
    const handleAccept = (id) => {
        const acceptmsg = { status: "accepted" }
        axios.patch(`https://job-city-server.vercel.app/api/v1/employ/getAllBiddedJobs/${id}`, acceptmsg)
            .then(res => {

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

        <>
        
            
                    <tr>
                        <th> {job_title} </th>
                        <td> {bidder_email} </td>
                        <td> {deadline} </td>
                        <td> {price} </td>
                        <td>
                            {
                                status == "rejected" ? "rejected" :
                                    status == "accepted" ? <h1> <Progressbar></Progressbar> </h1> : "pending"
                            }




                        </td>



                        {
                            status == "accepted" ?
                                <th> <button disabled onClick={() => handleAccept(_id)} className='btn bg-green-400'> accept</button> </th>
                                
                                :
                                status == "rejected"?
                                <th> <button disabled onClick={() => handleAccept(_id)} className='btn bg-green-400'> accept</button> </th>:

                                

                                <th> <button onClick={() => handleAccept(_id)} className='btn bg-green-400'> accept</button> </th>


                        }
                        {
                            status == "rejected" ?
                                <th> <button disabled onClick={() => handleReject(_id)} className='btn bg-green-400'> reject</button> </th>
                                 :
                                status == "accepted" ?
                                <th> <button disabled onClick={() => handleReject(_id)} className='btn bg-green-400'> reject</button> </th>:
                                <th> <button onClick={() => handleReject(_id)} className='btn bg-green-400'> reject</button> </th>
                        }










                    </tr>






            

        </>


    );
};

export default MyBidRequestRow;