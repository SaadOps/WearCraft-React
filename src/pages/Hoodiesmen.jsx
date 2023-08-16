import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorymen3 from '../components/Categorymen3';

const Hoodiesmen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Sweatshirt/Hoodies Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorymen3/>
</>
    )
  }
  
  export default Hoodiesmen;
