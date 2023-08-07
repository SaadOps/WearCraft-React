import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wishlistImage from '../assets/Wishlistimage.png';
import Sectionwishlist from './Sectionwishlist';

export default function Wishlist() {
  return (
    <Container-fluid className='bg-[#052428] w-full'>
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

  </Container-fluid>
  )
}


