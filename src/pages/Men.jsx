import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Menpage from '../components/Menpage';

const Men = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Men";
  },[])
    return (
      <>
        <Navbar />
        <Menpage/>
</>
    )
  }
  
  export default Men;
