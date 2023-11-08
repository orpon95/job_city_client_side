import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const UseBiddedData = () => {
    const {user} = useContext(authContext)

    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["biddedDatasss"],
        queryFn: async ()=>{
          const res = await  axios.get(`https://job-city-server-b4b24onqc-yeasins-projects-c520e666.vercel.app/api/v1/employ/getAllBiddedJobs?email=${user.email}`,{
            withCredentials:true
          })
            return await res.data
        }


    })
    console.log(refetch);



    return {data , isLoading, isFetching,refetch}
};

export default UseBiddedData;