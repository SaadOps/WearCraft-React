import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Signinpage from '../components/Signinpage';
import Footer from '../components/Footer';

const Accountpage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Login/Register";
  },[])
    return (
      <>
        <Navbar />
        <Signinpage/>
        <Footer/>

      </>
    )
  }
  
  export default Accountpage;
