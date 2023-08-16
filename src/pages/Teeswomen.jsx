import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorywomen2 from '../components/Categorywomen2';
import Footer from '../components/Footer';

const Teeswomen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Sweatshirt/Hoodies Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorywomen2/>
        <Footer/>
</>
    )
  }
  
  export default Teeswomen;
