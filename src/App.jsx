import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customization from './components/Customization';
function App() {
  return ( 
    <div className='m-0 p-0'>
           <Navbar />
           <Hero />
           <Customization/>

    </div>
   
     
    
  )
}

export default App
