import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './Section';
import menImage from '../assets/Menimage.jpg';

export default function Categorymen3() {
  return (
    <Container-fluid className='bg-[#052428] w-full'>
      <Row>
        <div className=' bg-[#052428] pt-16 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
        Sweatshirt & Hoodie
        </div>
      </Row>
      <Row className='bg-[#052428] space-y-10'>
        <Col className='pt-10'><Section Image={menImage} tshirt=" Black Sweatshirt" price="Rs. 799" /></Col>
        <Col ><Section Image={menImage} tshirt="White Hoodie" price="Rs. 799"/></Col>
        <Col ><Section Image={menImage} tshirt="Blue Sweatshirt" price="Rs. 799"/></Col>
      </Row>

    </Container-fluid>
  )
}
