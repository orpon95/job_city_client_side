import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyBidRequestRow from '../MyBidRequestRow/MyBidRequestRow';

const MyBidsRequest = () => {
    const bidRequestData = useLoaderData()
    console.log(bidRequestData);

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
                            <th>price</th>
                            <th>status</th>
                            <th>accept</th>
                            <th>reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // bidRequestData.map(data => <MyBidRequestRow key={data._id} data={data} > </MyBidRequestRow> )
                            bidRequestData.map(data => <MyBidRequestRow key={data._id} data={data} >  </MyBidRequestRow>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBidsRequest;