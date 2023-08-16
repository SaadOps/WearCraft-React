import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Customization from '../components/Customization';
import Tagline from '../components/Tagline';
import NewIn from '../components/NewIn';
import Footer from '../components/Footer';

const Homepage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - Home";
  },[])
    return (
      <div className='bg-[#052428]'>
        <Navbar />
        <Hero />
        <Customization />
        <Collections />
        <Tagline /> 
        <NewIn/>
        <Footer/>
      </div>
    )
  }
  
  export default Homepage;
