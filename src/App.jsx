import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Customization from './components/Customization'
function App() {
  return ( 
    <div className='m-0 p-0'>
           <Navbar />
           <Hero />
          <Customization />
          <Collections />

    </div>
   
     
    
  )
}

export default App
