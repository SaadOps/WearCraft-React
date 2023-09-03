import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Cartpagemain from '../components/Cartpagemain';
import Footer from '../components/Footer';

const cartpage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Cart page";
  },[])
    return (
      <>
        <Navbar />
        <Cartpagemain/>
        <Footer/>
</>
    )
  }
  
  export default cartpage;
