import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './Section';
import menImage from '../assets/Menimage.jpg';
import womenImage from '../assets/Womenimage.png'; 
import { Link } from 'react-router-dom';

export default function Shopnow() {
  return (
    <Container className='bg-[#052428]   w-full  max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl'>

    <Row className='bg-[#052428]  pt-20'>

      <Col><Section Image={menImage} link="/menpage" tshirt="Men"  price="" /></Col>
   
      <Col ><Section Image={womenImage} link="/womenpage" tshirt="Women" price=""/></Col>
    </Row>

  </Container>
  )
};