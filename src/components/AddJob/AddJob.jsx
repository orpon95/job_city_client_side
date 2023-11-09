import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const AddJob = () => {
    const { user } = useContext(authContext)
    console.log(user?.email);

    // handle function
    const handleAdd = e => {
        e.preventDefault();
        const form = e.target
        const email = form?.email?.value ;
        const job_title = form?.job_title?.value ;
        const deadline = form?.deadline?.value;
        const categories = form?.categories?.value;
        const min_price = form?.min_price?.value || "not given";
        const max_price = form?.max_price?.value || "not given";
        const short_description = form?.short_description?.value || "not given";
        

        // console.log(image,name,brandName,type,price,short_description,rating_2);
        const addedJobs = {
            email, job_title, deadline, categories, min_price, max_price, short_description
        }
        console.log(addedJobs);
        // axios post api
        // fetch("https://brand-shop-844bnpgxw-yeasins-projects-c520e666.vercel.app/add", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        axios.post("https://job-city-server.vercel.app/api/v1/addJobs",addedJobs)
            
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }

            })


    }
    return (
        <div className='my-11'>
            <Helmet>
                <title> AddJobs</title>
            </Helmet>
            <form onSubmit={handleAdd} className=' p-5 shadow-2xl space-y-6 border-2 border-cyan-300 rounded-2xl w-[70%] mx-auto' action="">


                {/* email */}
                <div className='text-center'>
                    <label htmlFor="deadline" className='text-xl font-bold'>email</label>
                    <input type="email" defaultValue={user?.email} readOnly required name='email' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                </div>
                {/* title of job */}
                <div className='text-center'>
                    <label htmlFor="job-title" className='text-xl font-bold mx-3'>job-title</label>
                    <select
                        className='border-2 w-full bg-transparent shadow-2xl  border-cyan-300 p-3 flex-1'

                        name="job_title"
                        required


                    >
                        <option className='bg-red-400' value="junoir web developer">junoir web developer</option>
                        <option value="senior web developer">senior web developer</option>
                        <option value="junior graphics designer">junior graphics designer</option>
                        <option value=" it manager"> it manager</option>
                        <option value="assistant marketing manager"> assistant marketing manager</option>
                        <option value="it assistant"> it assistant</option>
                        <option value="senior graphics designer">senior graphics designer</option>
                        <option value="visual designer">visual designer</option>
                        <option value="brand marketer">brand marketer</option>
                        <option value="social media analysist">social media analysist</option>
                        <option value="ui\ux designer">ui\ux designer</option>

                    </select><br />
                </div>
                {/* deadline */}
                <div className='text-center'>
                    <label htmlFor="deadline" className='text-xl font-bold'>deadline</label>
                    <input type="date"   required name='deadline' className=" bg-transparent shadow-2xl border-2 border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                </div>

                {/* job categories */}
                <div className='text-center'>
                    <label htmlFor="categories" className='text-xl font-bold mx-3'>categories</label>
                    <select
                        className='border-2 bg-transparent shadow-2xl  border-cyan-300  p-3 flex-1'

                        name="categories"
                        required


                    >
                        <option value="web development">web development</option>
                        <option value="digital marketing">digital marketing</option>
                        <option value="graphics design">graphics design</option>

                    </select><br />
                </div>
                

                {/* min price */}
                <div className='text-center'>
                    <label htmlFor="min-price" className='text-xl font-bold'>min price</label>
                    <input type="text" placeholder="min_price" required name='min_price' className="border-2 bg-transparent shadow-2xl  border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                </div>
                {/* max price */}
                <div className='text-center'>
                    <label htmlFor="max-price" className='text-xl font-bold'>max price</label>
                    <input type="text" placeholder="max-price" required name='max_price' className="border-2 bg-transparent shadow-2xl  border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                </div>
                {/* short des */}
                <div className='text-center'>
                    <label htmlFor="short description" className='text-xl font-bold'>short description</label>
                    <input type="text" required placeholder="short description" name='short_description' className="border-2 bg-transparent shadow-2xl  border-cyan-300 flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />

                </div>

               

                <div className='text-center'>
                    <button type='submit' className='btn btn-ghost border-2  shadow-2xl  border-cyan-300'  > add </button>
                </div>

            </form>

        </div>
    );
};

export default AddJob;