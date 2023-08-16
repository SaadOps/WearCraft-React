import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Shopnow from '../components/Shopnow';
import Footer from '../components/Footer';

const Shopnowpage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Men/Women";
  },[])
    return (
      <>
        <Navbar />
        <Shopnow/>
        <Footer/>

      </>
    )
  }
  
  export default Shopnowpage;