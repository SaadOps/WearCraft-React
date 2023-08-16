import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Signinpage from '../components/Signinpage';

const Accountpage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Login/Register";
  },[])
    return (
      <>
        <Navbar />
        <Signinpage/>

      </>
    )
  }
  
  export default Accountpage;
