import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const UseBiddedData = () => {

    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ["biddedData"],
        queryFn: async ()=>{
          const res = await  axios.get("http://localhost:5000/api/v1/employ/getAllBiddedJobs")
            return await res.data
        }


    })
    console.log(refetch);



    return {data , isLoading, isFetching,refetch}
};

export default UseBiddedData;