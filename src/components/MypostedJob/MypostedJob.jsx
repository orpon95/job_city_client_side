import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseAlladdedjobs from '../../Hooks/UseAlladdedjobs';
import PostedJobsCard from '../PostedJobsCard/PostedJobsCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { authContext } from '../../AuthProvider/AuthProvider';

const MypostedJob = () => {
    const {user} = useContext(authContext)
    // const AllData = useLoaderData()


    

    // console.log("all datas", AllData);

    // tenstack
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["addealldData"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/getAddedJobsData?email=${user.email}`, {
                withCredentials: true
            })
            return await res.data
        }


    })
    useEffect(()=>{
        setLoadedUsers(data)


    },[data])


    const [loadedUsers, setLoadedUsers] = useState([])
     console.log("tan data",data);
     console.log("load", loadedUsers);


    // useefect start
    // useEffect(()=>{
    //     axios.get("http://localhost:5000/api/v1/getAddedJobsData",{
    //         withCredentials:true
    //     })
    //     .then(res=> setAllData(res.data) )
    // },[])






    return (
        <div>
            <h1 className='text-2xl font-extrabold my-9 text-center' > All posted Jobs </h1>

            <div className='grid border-2 border-red-400 grid-cols-1 md:grid-cols-2 gap-7' >
                {
                    // AllData?.map(data => <PostedJobsCard key={data._id} data={data} ></PostedJobsCard> )
                    loadedUsers?.map(loadedUser => <PostedJobsCard key={loadedUser._id} cartdata={loadedUser} setLoadedUsers={setLoadedUsers} loadedUsers={loadedUsers} ></PostedJobsCard>)
                }

            </div>
        </div >
    );
};

export default MypostedJob;