import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
// import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
ChartJs.register(Tooltip, Title, ArcElement, Legend);

// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import { Doughnut } from 'react-chartjs-2';
// import { Pie } from "react-chartjs-2";

// const data = [
//   { name: 'Group A', value: 800 },
//   { name: 'Group B', value: 500 },
//   { name: 'Group C', value: 100 },
//   { name: 'Group D', value: 700 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };





// new



const Chart = () => {

  const [jobsData, setJobData] = useState([])
  console.log("new jobs", jobsData);



  useEffect(() => {
    fetch("https://job-city-server.vercel.app/api/v6/employ/getAllBiddedJobs")
      .then(res => res.json())
      .then(data => setJobData(data))
  }, [])
  // web development
  const itData = jobsData?.filter(Data => Data?.job_title === "it assistant")
  const juniorwebDevData = jobsData?.filter(Data => Data?.job_title === "junoir web developer")
  const seniorwebDevData = jobsData?.filter(Data => Data?.job_title === "senior web developer")
  // digital marketing

  const assistantData = jobsData?.filter(Data => Data?.job_title === "assistant marketing manager")
  const brandmarketer = jobsData?.filter(Data => Data?.job_title === "brand marketer")
  const socialdta = jobsData?.filter(Data => Data?.job_title === "social media analysist")
  // graphic design

  const juniorgraphicdesign = jobsData?.filter(Data => Data?.job_title === "junior graphics designer")
  const seniorgraphics = jobsData?.filter(Data => Data?.job_title === "senior graphics designer")
  const visualDesigner = jobsData?.filter(Data => Data?.job_title === "visual designer")


  // total lenght calculation
  const webDevdata = itData?.length + juniorwebDevData?.length + seniorwebDevData?.length
  const digitalmarketing = assistantData?.length + brandmarketer?.length + socialdta?.length
  const graphicsDesign = juniorgraphicdesign?.length + seniorgraphics?.length + visualDesigner?.length
  // total percantage calculation
  console.log("totla data", jobsData.length);
  const webdevpercentage = (100 * webDevdata) / jobsData.length
  const digitalmarketingpercentage = (100 * digitalmarketing) / jobsData.length
  const graphicspercentage = (100 * graphicsDesign) / jobsData.length




  console.log("web", webDevdata, digitalmarketing, graphicsDesign);



  // const data = [
  //   { name: 'Group A', value: 800 },
  //   { name: 'Group B', value: 500 },
  //   { name: 'Group C', value: 100 },
  //   { name: 'Group D', value: 700 },
  // ];

  // new
  const data = {
    datasets: [
      {
        data: [`${webdevpercentage}`, `${digitalmarketingpercentage}`, `${graphicspercentage}`],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
    labels: ["web development", "Digital marketing", "graphics design"],
  };

  return (

    <div  >
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      {/* <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS?.length]} />
            ))}
          </Pie>
        </PieChart> */}
      {/* </ResponsiveContainer> */}

      <h1 className='text-4xl font-bold my-8 text-center p-6 border-b-8 border-red-400 '> Statistics</h1>
      <p className='text-center text-2xl my-7'>Explore the dynamic landscape of user engagement in our platform through this insightful pie chart, showcasing the distribution of bids across diverse job categories. The chart elegantly illustrates the preferences of our community members, with a focus on three prominent domains: web development, graphic design, and digital marketing. Each slice represents the percentage of users who have actively participated in bidding for projects within these distinct realms. Notably,
       web development captures the attention of approximately <span className='font-bold'>`{webdevpercentage}`%</span>  of our users, underscoring the demand for cutting-edge digital solutions. Surging ahead,
        digital marketing emerges as a powerhouse, commanding a substantial <span className='font-bold' >`{digitalmarketingpercentage}`%</span> of user bids, showcasing a keen interest in promoting products and services in the online sphere. Meanwhile,
         the artistry of graphic design resonates with <span className='font-bold'>`{graphicspercentage}`%</span> of our users</p>
      <div className='w-[40%]  mx-auto  '>
        <Pie data={data}></Pie>


      </div>


    </div>









    // <div>hi</div>
    // <Pie></Pie>








  );
};

export default Chart;
