import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MybidsTableRow from '../MybidsTableRow/MybidsTableRow';
import UseBiddedData from '../../Hooks/UseBiddedData';
import { Helmet } from 'react-helmet-async';

const MyBids = () => {
    // const allBiddedJobs = useLoaderData()
    // console.log(allBiddedJobs);
    const {data:AllData,isLoading,isFetching,refetch} = UseBiddedData()
    // console.log("refetch is",refetch,"isloading is", isLoading);
    // console.log(refetch);
    console.log("alldata",AllData);



    return (
        <div className='h-screen'>
            <Helmet>
                <title> MyBids</title>
            </Helmet>
            <h1 className='text-4xl font-bold my-8 text-center'> My Bids</h1>
            <div className="overflow-x-auto  shadow-2xl rounded-lg shadow-fuchsia-200">
                <table className="table shadow-2xl  rounded-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job title</th>
                            <th>email</th>
                            <th>deadline</th>
                            <th>status</th>
                            <th>complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // data.map(data => <MybidsTableRow key={data._id} data={data} ></MybidsTableRow> )
                            AllData?.map(data => <MybidsTableRow key={data._id} data={data} refetch={refetch} ></MybidsTableRow> )
                        }
                       


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;