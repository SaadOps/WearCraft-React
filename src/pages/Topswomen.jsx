import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorywomen3 from '../components/Categorywomen3';

const Topswomen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Sweatshirt/Hoodies Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorywomen3/>
</>
    )
  }
  
  export default Topswomen;