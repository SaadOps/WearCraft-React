import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Wishlist from '../components/Wishlist';

const Wishlistpage = () => {
    useEffect(()=>{
      document.title = "Wearcraft - wishlist";
  },[])
    return (
      <>
        <Navbar />
        <Wishlist/>
</>
    )
  }
  
  export default Wishlistpage;
