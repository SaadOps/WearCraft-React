import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './Section';
import menImage from '../assets/Menimage.jpg';

export default function Menpage() {
  return (
    <Container className='bg-[#052428]  w-full  max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl'>
    <Row>
      <div className=' bg-[#052428] pt-16 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
        Men Section
      </div>
    </Row>
    <Row className='bg-[#052428] space-y-10'>
      <Col className='pt-10'><Section Image={menImage} tshirt="Oversized Tshirt"  price="" /></Col>
      <Col  ><Section Image={menImage} tshirt="Basics" price=""/></Col>
      <Col ><Section Image={menImage} tshirt="Sweatshirt & Hoodie" price=""/></Col>
    </Row>

  </Container>
  )
};