import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorymen3 from '../components/Categorymen3';
import Footer from '../components/Footer';

const Hoodiesmen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Sweatshirt/Hoodies Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorymen3/>
        <Footer/>
</>
    )
  }
  
  export default Hoodiesmen;
