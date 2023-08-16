import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Categorymen2 from '../components/Categorymen2';

const Basicsmen = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Basics Men";
  },[])
    return (
      <>
        <Navbar />
        <Categorymen2/>
</>
    )
  }
  
  export default Basicsmen;
