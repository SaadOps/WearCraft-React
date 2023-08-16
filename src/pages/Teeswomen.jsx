import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorywomen2 from '../components/Categorywomen2';

const Teeswomen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Sweatshirt/Hoodies Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorywomen2/>
</>
    )
  }
  
  export default Teeswomen;
