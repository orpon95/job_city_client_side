import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MybidsTableRow from '../MybidsTableRow/MybidsTableRow';
import UseBiddedData from '../../Hooks/UseBiddedData';

const MyBids = () => {
    // const allBiddedJobs = useLoaderData()
    // console.log(allBiddedJobs);
    const {data:AllData,isLoading,isFetching,refetch} = UseBiddedData()
    // console.log("refetch is",refetch,"isloading is", isLoading);
    // console.log(refetch);
    console.log("alldata",AllData);



    return (
        <div className='h-screen'>
            <div className="overflow-x-auto">
                <table className="table">
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