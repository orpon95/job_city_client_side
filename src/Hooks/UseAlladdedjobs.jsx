import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const UseAlladdedjobs = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["addedData"],
        queryFn: async ()=>{
          const res = await  axios.get("https://job-city-server.vercel.app/api/v1/getAddedJobsData",{
            withCredentials:true
          })
            return await res.data
        }


    })
    return {data , isLoading, isFetching,refetch}
};

export default UseAlladdedjobs;