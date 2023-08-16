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



const routerfg = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/wishlist",
    element: <Wishlistpage/>
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
          <Signinpage/> */}

    </div>
   
     
    
  )
}

export default App
