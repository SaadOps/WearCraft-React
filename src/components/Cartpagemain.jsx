import React from 'react'
import Cartpageshop from './Cartpageshop'
import Cartpagecontent from './Cartpagecontent'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cartImage from "../assets/cartimage.png";

export default function Cartpagemain() {
  return (
    <Container className='bg-[#052428] w-[500px] sm:w-[1800px] md:max-w-full lg:max-w-full '>
        <Row className='text-4xl text-white justify-center items-center m-auto  pt-10 '>
        SHOPPING BAG
        </Row>
        <Row className=''>
        <Col className='space-y-10 py-24 '>
            <Cartpageshop cartimage={cartImage}/>
            <Cartpageshop cartimage={cartImage}/>
            <Cartpageshop cartimage={cartImage}/>
        </Col>
        <Col className='my-5'>
        <Cartpagecontent />
        </Col>
        </Row>
      
    </Container>
  )
}
