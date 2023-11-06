/* eslint-disable react/prop-types */
import React from 'react';

const MybidsTableRow = ({data}) => {
    const { job_title, deadline,price, bidder_email,Buyer_email,_id}= data
    return (
        
            
            <tr>
                <th> {job_title} </th>
                <td> {bidder_email} </td>
                <td> {deadline} </td>
                <td> pending </td>
                <td>complete</td>
            </tr>

        
    );
};

export default MybidsTableRow;