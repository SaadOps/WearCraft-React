import React from 'react'

import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Womenpage from '../components/Womenpage';

const Women = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Women";
  },[])
    return (
      <>
        <Navbar />
        <Womenpage/>
</>
    )
  }
  
  export default Women;
