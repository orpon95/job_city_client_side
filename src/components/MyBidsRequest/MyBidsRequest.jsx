import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyBidRequestRow from '../MyBidRequestRow/MyBidRequestRow';
import UseBiddedData from '../../Hooks/UseBiddedData';
import axios from 'axios';
import { authContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';

const MyBidsRequest = () => {
    const { user } = useContext(authContext)
    // const [filtredData, setfiltredData] = useState([])
    // const [queryData, setqueryData] = useState([])
    // console.log("state filter data", filtredData);

    
    // use query star
    const { data:bidRequestData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["addealldData"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/v3/employ/getAllBiddedJobs?email=${user.email}`, {
                withCredentials: true
            })
            return await res?.data
        }



    })
    // user query end

    // if (!filtredData) {
    //     setqueryData(bidRequestData)
    //     // const filtererfn = ()=>{
    //     //     setqueryData(bidRequestData)

    //     // }
    //     // filtererfn()

    // }





    // useEffect(() => {

    //     const filterData = bidRequestData?.filter(data => user?.email == data.bidder_email)
    //     console.log("filter", filterData);
    //     setfiltredData(filterData)

    // }, [bidRequestData, user?.email])


    // console.log(bidRequestData);


    return (
        <div className='h-screen'>
            
                <div className="overflow-x-auto  h-screen">
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

            














        </div>
    );
};

export default MyBidsRequest;