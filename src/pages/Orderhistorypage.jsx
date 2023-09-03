import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Orderhistorymain from '../components/Orderhistorymain';
import Footer from '../components/Footer';

const Orderhistorypage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Order History";
  },[])
    return (
      <>
        <Navbar />
        <Orderhistorymain/>
        <Footer/>
</>
    )
  }
  
  export default Orderhistorypage;
