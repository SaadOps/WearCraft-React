import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import './App.css';
import './index.css';
import Homepage from './pages/Homepage';
import Wishlistpage from './pages/Wishlistpage';
import Men from './pages/Men';
import Women from './pages/Women';
import Accountpage from './pages/Accountpage';
import Shopnowpage from './pages/Shopnowpage';
import Oversizedmen from './pages/Oversizedmen';
import Basicsmen from './pages/Basicsmen';
import Hoodiesmen from './pages/Hoodiesmen';
import Oversizedwomen from './pages/Oversizedwomen';
import Teeswomen from './pages/Teeswomen';
import Topswomen from './pages/Topswomen';
import Cartpage from './pages/Cartpage';
import Orderhistorytitle from './components/Orderhistorytitle';
import Orderhistorycontent from './components/Orderhistorycontent';
import Orderhistorymain from './components/Orderhistorymain';
import Orderhistorypage from './pages/Orderhistorypage';
import Cartpageshop from './components/Cartpageshop';
import Cartpagecontent from './components/Cartpagecontent';
import Cartpagemain from './components/Cartpagemain';
import Wishlist from './components/Wishlist';







const routerfg = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/cartpage",
    element: <Cartpage/>
  },
  {
    path: "/menpage",
    element: <Men/>
  },
  {
    path: "/womenpage",
    element: <Women/>
  },
  {
    path: "/account",
    element: <Accountpage/>
  },
  {
    path: "/shopnowpage",
    element: <Shopnowpage/>
  },
  {
    path: "/menpage/oversizedmen",
    element: <Oversizedmen/>
  },
  {
    path: "/menpage/basicsmen",
    element: <Basicsmen/>
  },
  {
    path: "/menpage/hoodiesmen",
    element: <Hoodiesmen/>
  },
  {
    path: "/womenpage/oversizedwomen",
    element: <Oversizedwomen/>
  },
  {
    path: "/womenpage/teeswomen",
    element: <Teeswomen/>
  },
  {
    path: "/womenpage/topswomen",
    element: <Topswomen/>
  },
  {
    path: "/cartpage/orderhistory",
    element: <Orderhistorypage/>
  }
]);
function App() {
  return ( 
    <div className='m-0 p-0'>


     <RouterProvider router={routerfg} />
 
            {/* <Navbar />
           <Hero />
          <Customization />
          <Collections />
          <Tagline /> 
          <Menpage/>
          <Womenpage/>
          <Categorymen1/>
          <Categorywomen1/>
          <Categorymen2/>
          <Categorymen3/>
          <Categorywomen2/>
          <Categorywomen3/>
          <Wishlist/>
          <Sectionsignin/>
          <Signinpage/>
          <Sectionhistory/>
          <Section/> */}
          {/* <Orderhistorymain/> */}
          {/* <Orderhistorytitle/>
          <Orderhistorycontent/> */}
          {/* <Cartpageshop/> */}
          {/* <Cartpagecontent/> */}
          {/* <Cartpagemain/> */}
          {/* <Wishlist/> */}
         
          

    </div>
   
     
    
  )
}

export default App
