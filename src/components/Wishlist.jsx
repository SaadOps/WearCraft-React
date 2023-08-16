import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wishlistImage from '../assets/Wishlistimage.png';
import Sectionwishlist from './Sectionwishlist';

export default function Wishlist() {
  return (
    <Container className='bg-[#052428] max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl'>
    <Row>
      <div className=' bg-[#052428] pt-6 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
      Your Wishlist
      </div>
    </Row>
    <Row>
      <div className=' bg-[#052428] pt-2 text-center text-base sm:text-base md:text-lg lg:text-xl text-white '>
      This is the selection of items you like the most
      </div>
    </Row>
    <Row className='bg-[#052428] space-y-10'>
      <Col className='pt-10'><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"  /></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"/></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"/></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"  /></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"/></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"/></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"/></Col>
      <Col ><Sectionwishlist Image={wishlistImage} tshirt="Wide twill trousers" price="Rs. 1,299"/></Col>
    </Row>

  </Container>
  )
}


