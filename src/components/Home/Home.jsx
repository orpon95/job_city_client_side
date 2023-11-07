import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { authContext } from '../../AuthProvider/AuthProvider';
import JobCard from '../JobCard/JobCard';

const Home = () => {
  
    // console.log(tabIndex);
    const [activeTab, setActiveTab] = useState("web development");
    const [jobdata, setJobData] = useState([])
    console.log(jobdata);
    // console.log(jobdata);
    const { user } = useContext(authContext)
    // console.log(activeTab);
    const url = `http://localhost:5000/api/v2/getAddedJobsData`

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
        <div className='text-center mx-auto' >
            <Tabs className="border-2 border-red-500 text-center justify-center" >
                <TabList className="border-2 border-blue-500 items-center text-center justify-center" >
                    <div className='flex gap-6 justify-center' >
                        <Tab onClick={() => handleTabClick('web development')} ><button className='btn-ghost' >web development</button></Tab>
                        <Tab onClick={() => handleTabClick('digital marketing')} ><button className='btn-ghost'>digital marketing</button> </Tab>
                        <Tab onClick={() => handleTabClick('graphics design')} ><button className='btn-ghost'>graphics design</button></Tab>
                    </div>

                </TabList>
                <TabPanel>
                    {
                        <div className=' border-2 border-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
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
                    {<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {
                            filteredData.map(data => <JobCard key={data._id} data={data} ></JobCard>)

                        }

                    </div>


                    }
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Home;