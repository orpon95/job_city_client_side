import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { authContext } from '../../AuthProvider/AuthProvider';
import JobCard from '../JobCard/JobCard';
import Banner from '../Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import OurPartner from './OurPartner/OurPartner';
import { Helmet } from 'react-helmet-async';
import Chart from '../Chart/Chart';

const Home = () => {

    // console.log(tabIndex);
    const [activeTab, setActiveTab] = useState("web development");
    const [jobdata, setJobData] = useState([])
    console.log(jobdata);
    // console.log(jobdata);
    const { user } = useContext(authContext)
    // console.log(activeTab);
    const url = `https://job-city-server.vercel.app/api/v2/getAddedJobsData`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobData(data))
    }, [])


    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // axios.get(url)
        //     .then(res => setJobData(res.data))
        //     ;
    };

    const filteredData = jobdata?.filter(data => data.categories == activeTab);

    return (
        <div>
            <Helmet>
                <title> Home</title>
            </Helmet>
            <Banner></Banner>

            <h1 className='text-4xl font-bold my-8 text-center'> JOBs Categories</h1>
            <div className=' bg-transparent text-center mx-auto' >
                <Tabs className="p-8 shadow-2xl shadow-black text-center justify-center" >
                    <TabList className=" my-8 items-center text-center justify-center" >
                        <div className='flex flex-wrap   gap-2 md:gap-5 justify-center' >
                            <Tab onClick={() => handleTabClick('web development')} ><button className='btn bg-white opacity-60 hover:bg-red-300 hero-overlay text-base md:text-2xl font-bold' >web development</button></Tab>
                            <Tab onClick={() => handleTabClick('digital marketing')} ><button className='btn bg-white opacity-60 hover:bg-red-300 hero-overlay text-base md:text-2xl font-bold'>digital marketing</button> </Tab>
                            <Tab onClick={() => handleTabClick('graphics design')} ><button className='btn bg-white opacity-60 hover:bg-red-300 hero-overlay text-base md:text-2xl font-bold'>graphics design</button></Tab>
                        </div>

                    </TabList>
                    <TabPanel>
                        {
                            <div className='  bg-transparent place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                                {
                                    filteredData.map(data => <JobCard key={data._id} data={data} ></JobCard>)

                                }

                            </div>


                        }

                    </TabPanel>
                    <TabPanel>
                        {
                            // tabIndex == 0 ? <p>web</p>:"other"
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                                {
                                    filteredData.map(data => <JobCard key={data._id} data={data} ></JobCard>)

                                }

                            </div>



                        }
                    </TabPanel>
                    <TabPanel>
                        {<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
                            {
                                filteredData.map(data => <JobCard key={data._id} data={data} ></JobCard>)

                            }

                        </div>


                        }
                    </TabPanel>
                </Tabs>



            </div>


            <AboutUs></AboutUs>
            <OurPartner></OurPartner>

            {/* chart */}
           

        </div>
    );
};

export default Home;