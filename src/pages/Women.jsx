import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Womenpage from '../components/Womenpage';
import Footer from '../components/Footer';

const Women = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Women";
  },[])
    return (
      <>
        <Navbar />
        <Womenpage/>
        <Footer/>
</>
    )
  }
  
  export default Women;
