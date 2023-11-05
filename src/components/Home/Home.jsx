import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Home = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    console.log(activeTab);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <Tabs>
                <TabList >
                    <div className='flex gap-6' >
                        <Tab onClick={() => handleTabClick('web development')} ><button className='btn-ghost' >web development</button></Tab>
                        <Tab onClick={() => handleTabClick(' digital marketing')} ><button className='btn-ghost'>digital marketing</button> </Tab>
                        <Tab onClick={() => handleTabClick('graphics design')} ><button className='btn-ghost'>graphics design</button></Tab>
                    </div>

                </TabList>
                <TabPanel>
                    <h1>web development</h1>
                </TabPanel>
                <TabPanel>
                    <h1>digital marketing</h1>
                </TabPanel>
                <TabPanel>
                    graphics design
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Home;