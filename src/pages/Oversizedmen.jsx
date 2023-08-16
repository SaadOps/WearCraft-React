import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorymen1 from '../components/Categorymen1';
import Footer from '../components/Footer';

const Oversizedmen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Oversized Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorymen1/>
        <Footer/>
</>
    )
  }
  
  export default Oversizedmen;
