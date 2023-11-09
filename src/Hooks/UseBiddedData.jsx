import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const UseBiddedData = () => {
    const {user} = useContext(authContext)
    // const [bidData, setBidData] =useState([])
    

    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["biddedDatasss"],
        queryFn: async ()=>{
          const res = await  axios.get(`https://job-city-server.vercel.app/api/v1/employ/getAllBiddedJobs?email=${user.email}`,{
            withCredentials:true
          })
            return await res.data
        }
      


    })
    console.log(refetch);
    // setBidData(data)




    return {data , isLoading, isFetching,refetch}
};



export default UseBiddedData;