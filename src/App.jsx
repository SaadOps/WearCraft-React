import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Customization from './components/Customization'
import Tagline from './components/Tagline'
import Section from './components/Categorymen1';
import Menpage from './components/Menpage';
import Womenpage from './components/Womenpage';
import Categorymen1 from './components/Categorymen1';
import Categorywomen1 from './components/Categorywomen1';
import Categorymen2 from './components/Categorymen2';
import Categorymen3 from './components/Categorymen3';
import Categorywomen2 from './components/Categorywomen2';
import Categorywomen3 from './components/Categorywomen3';
function App() {
  return ( 
    <div className='m-0 p-0'>
            <Navbar />
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

    </div>
   
     
    
  )
}

export default App
