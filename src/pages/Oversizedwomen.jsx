import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorywomen1 from '../components/Categorywomen1';

const Oversizedwomen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Oversized Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorywomen1/>
</>
    )
  }
  
  export default Oversizedwomen;
