import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Customization from '../components/Customization';
import Tagline from '../components/Tagline';

const Homepage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Home";
  },[])
    return (
      <>
        <Navbar />
        <Hero />
        <Customization />
        <Collections />
        <Tagline /> 
      </>
    )
  }
  
  export default Homepage;
