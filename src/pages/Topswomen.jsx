import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorywomen3 from '../components/Categorywomen3';
import Footer from '../components/Footer';

const Topswomen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Sweatshirt/Hoodies Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorywomen3/>
        <Footer/>
</>
    )
  }
  
  export default Topswomen;