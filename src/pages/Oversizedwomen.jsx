import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorywomen1 from '../components/Categorywomen1';
import Footer from '../components/Footer';

const Oversizedwomen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Oversized Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorywomen1/>
        <Footer/>
</>
    )
  }
  
  export default Oversizedwomen;
