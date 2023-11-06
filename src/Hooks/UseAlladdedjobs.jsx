import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const UseAlladdedjobs = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["biddedData"],
        queryFn: async ()=>{
          const res = await  axios.get("http://localhost:5000/api/v1/getAddedJobsData")
            return await res.data
        }


    })
    return {data , isLoading, isFetching,refetch}
};

export default UseAlladdedjobs;