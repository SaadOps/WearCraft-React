import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './Section';
import womenImage from '../assets/Womenimage.png'; 

export default function Womenpage() {
  return (
    <Container-fluid className='bg-[#052428] w-full'>
    <Row>
      <div className=' bg-[#052428] pt-16 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
        Women Section
      </div>
    </Row>
    <Row className='bg-[#052428] space-y-10'>
      <Col className='pt-10'><Section Image={womenImage} tshirt="Oversized Tshirt" price="" /></Col>
      <Col ><Section Image={womenImage} tshirt="Tops" price=""/></Col>
      <Col ><Section Image={womenImage} tshirt="Baby Tees" price=""/></Col>
    </Row>

  </Container-fluid>
  )
}
