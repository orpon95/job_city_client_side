import React from 'react';
import { Link } from 'react-router-dom';
import UseAlladdedjobs from '../../Hooks/UseAlladdedjobs';
import PostedJobsCard from '../PostedJobsCard/PostedJobsCard';

const MypostedJob = () => {
    const{data:AllData,isLoading,isFetching,refetch} = UseAlladdedjobs()
    return (
        <div>
            <h1 className='text-2xl font-extrabold my-9 text-center' > All posted Jobs </h1>
           
            <div className='grid border-2 border-red-400 grid-cols-1 md:grid-cols-2 gap-7' >
                {
                    AllData?.map(data => <PostedJobsCard key={data._id} data={data} ></PostedJobsCard> )
                }

            </div>
        </div>
    );
};

export default MypostedJob;