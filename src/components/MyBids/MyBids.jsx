import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MybidsTableRow from '../MybidsTableRow/MybidsTableRow';

const MyBids = () => {
    const allBiddedJobs = useLoaderData()
    console.log(allBiddedJobs);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job title</th>
                            <th>email</th>
                            <th>deadline</th>
                            <th>status</th>
                            <th> <button className='btn-ghost'> complete</button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBiddedJobs.map(data => <MybidsTableRow key={data._id} data={data} ></MybidsTableRow> )
                        }
                       


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;