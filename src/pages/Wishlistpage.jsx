import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Wishlist from '../components/Wishlist';
import Footer from '../components/Footer';

const Wishlistpage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - wishlist";
  },[])
    return (
      <>
        <Navbar />
        <Wishlist/>
        <Footer/>
</>
    )
  }
  
  export default Wishlistpage;
