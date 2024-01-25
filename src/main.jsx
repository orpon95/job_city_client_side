import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// react router setup
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import AddJob from './components/AddJob/AddJob.jsx';
import MypostedJob from './components/MypostedJob/MypostedJob.jsx';
import MyBids from './components/MyBids/MyBids.jsx';
import MyBidsRequest from './components/MyBidsRequest/MyBidsRequest.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider, { authContext } from './AuthProvider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './components/Details/Details.jsx';
import Update from './components/Update/Update.jsx';
import Delete from './components/Delete/Delete.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import axios from 'axios';
import Error from './components/Error/Error.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Chart from './components/Chart/Chart.jsx';
// import { useContext } from 'react';

const queryClient = new QueryClient()


// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      
      {
        path: "addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "myPostedJob",
        element: <PrivateRoute> <MypostedJob></MypostedJob></PrivateRoute>,
        // loader: ()=> fetch("https://job-city-server.vercel.appapi/v1/getAddedJobsData")
        // loader: () => axios.get("https://job-city-server.vercel.appapi/v1/getAddedJobsData", {
        //   withCredentials: true
        // })
      },
      {
        path: "myBids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
        // loader:()=>fetch("https://job-city-server.vercel.appapi/v1/employ/getAllBiddedJobs")
      },
      {
        path: "myBidsRequest",
        element: <PrivateRoute><MyBidsRequest></MyBidsRequest></PrivateRoute>,
        // loader:()=>fetch("https://job-city-server.vercel.appapi/v1/employ/getAllBiddedJobs")
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("https://job-city-server.vercel.app/api/v2/getAddedJobsData", {
          withCredentials: true
        })
      },
      {
        path: "update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,

      },
      {
        path: "delete/:id",
        element: <Delete></Delete>,

      },
      {
        path: "/chart",
        element: <Chart></Chart>,

      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />

        </AuthProvider>


      </QueryClientProvider>


    </HelmetProvider>



  </React.StrictMode>,
)
