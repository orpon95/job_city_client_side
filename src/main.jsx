import React from 'react'
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
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './components/Details/Details.jsx';
const queryClient = new QueryClient()


// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "myPostedJob",
        element: <MypostedJob></MypostedJob>,
      },
      {
        path: "myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "myBidsRequest",
        element: <MyBidsRequest></MyBidsRequest>,
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
        element: <Details></Details>,
        loader: ()=>fetch("http://localhost:5000/api/v1/getAddedJobsData")
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />

      </AuthProvider>


    </QueryClientProvider>


  </React.StrictMode>,
)
