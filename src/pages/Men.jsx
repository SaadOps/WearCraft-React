import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Menpage from '../components/Menpage';
import Footer from '../components/Footer';

const Men = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Men";
  },[])
    return (
      <>
        <Navbar />
        <Menpage/>
        <Footer/>
</>
    )
  }
  
  export default Men;
