import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyBidRequestRow from '../MyBidRequestRow/MyBidRequestRow';
import UseBiddedData from '../../Hooks/UseBiddedData';
import axios from 'axios';
import { authContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import { Helmet } from 'react-helmet-async';

const MyBidsRequest = () => {
    const { user } = useContext(authContext)
    // const [filtredData, setfiltredData] = useState([])
    // const [queryData, setqueryData] = useState([])
    // console.log("state filter data", filtredData);


    // use query for bided data for this rout star
    const { data: bidRequestData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["addealldData"],
        queryFn: async () => {
            const res = await axios.get(`https://job-city-server.vercel.app/api/v3/employ/getAllBiddedJobs?email=${user?.email}`, {
                withCredentials: true
            })
            return await res?.data
        }



    })
    // user query for e email from addedjobs collectio
    // use query for bided data for this rout star
    const { data: addedcollection } = useQuery({
        queryKey: ["fromAddedJobsCollection"],
        queryFn: async () => {
            const res = await axios.get(`https://job-city-server.vercel.app/api/v4/employ/getAlladdedJobs?email=${user.email}`, {
                withCredentials: true
            })
            return await res?.data
        }



    })
    // user query for e email from addedjobs collectio
    console.log("addedcollection", addedcollection);

    const filterEmail = addedcollection?.filter(data => data?.email == user?.email)
    console.log("filterEmail", filterEmail);








    return (
        <div className='h-screen'>
            <Helmet>
                <title> myBidsRequest</title>
            </Helmet>


            < >
                {
                    filterEmail?.length >0 ?
                        <div className="overflow-x-auto  h-screen shadow-2xl rounded-lg shadow-fuchsia-200">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Job title</th>
                                        <th>email</th>
                                        <th>deadline</th>
                                        <th>price</th>
                                        <th>status</th>
                                        <th>accept</th>
                                        <th>reject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // bidRequestData.map(data => <MyBidRequestRow key={data._id} data={data} > </MyBidRequestRow> )
                                        bidRequestData?.map(data => <MyBidRequestRow key={data._id} data={data} refetch={refetch} >  </MyBidRequestRow>)
                                    }



                                </tbody>
                            </table>
                        </div>
                        :
                        <p className=' text-red-400 text-center font-extrabold text-5xl justify-center'> sorry You have not any data , Probably YOu have no bid request</p>
             }

            </>





        </div>
    );
};

export default MyBidsRequest;