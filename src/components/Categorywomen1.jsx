import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import womenImage from '../assets/Womenimage.png';
import Sectioncategory from './Sectioncategory';

export default function Categorywomen1() {
  return (
    <Container className='bg-[#052428] max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl'>
    <Row>
      <div className=' bg-[#052428] pt-16 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
        Oversized Tshirt
      </div>
    </Row>
    <Row className='bg-[#052428] space-y-10'>
      <Col className='pt-10'><Sectioncategory Image={womenImage} tshirt="Oversized Tshirt" price="Rs. 599" /></Col>
      <Col ><Sectioncategory Image={womenImage} tshirt="Oversized Tshirt" price="Rs. 599"/></Col>
      <Col ><Sectioncategory Image={womenImage} tshirt="Oversized Tshirt" price="Rs. 599"/></Col>
    </Row>

  </Container>
  )
}
