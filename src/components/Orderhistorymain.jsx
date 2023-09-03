import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Orderhistorytitle from './Orderhistorytitle';
import Orderhistorycontent from './Orderhistorycontent';
import historyImage from "../assets/Orderhistoryimage.png";

export default function Orderhistorymain() {
  return (
    <Container className='bg-[#052428] max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl'>
        <div className='pt-6 pb-2'>
      <Row className='bg-[#052428] text-lg sm:text-lg md:text-2xl lg:text-3xl font-bold justify-center items-center text-white'>
      Your Order History
      </Row>
      <Row className='bg-[#052428] text-xs sm:text-sm md:text-sm lg:text-sm justify-center items-center text-white'>
      This is the list of items ordered by you previously
      </Row>
      </div>
      <div className='space-y-6'>
      <Row>
        <Orderhistorytitle orderplaced="27-April-2023" totalamount="40,000" shippedto="Mahesh" orderid=" #124-234-234" orderstatus=" DELIVERED"/>
      </Row>
      <Row className='space-y-6 sm:space-y-6 md:space-y-6 lg:space-y-0 py-8'>

        <Col className=''><Orderhistorycontent deliverydate="27-April-2023" historyimg={historyImage} productname="White cotton sweatshirt"/></Col>
        <Col className=''><Orderhistorycontent deliverydate="27-April-2023" historyimg={historyImage} productname="White cotton sweatshirt"/></Col>

        </Row>
        </div>
    </Container>
  )
}
