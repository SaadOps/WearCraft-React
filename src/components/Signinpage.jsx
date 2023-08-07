import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sectionsignin from './Sectionsignin';

export default function Signinpage() {
  return (
    <Container className=' bg-[#052428] max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl'>
        <Row className='bg-[#052428] '>
        <Col className='flex justify-center items-center'><Sectionsignin title="Login" forgotpassword="Forgotten your password?"  noaccount="No Account? Sign up"/></Col>
        <Col className='flex justify-center items-center'><Sectionsignin title="Register" forgotpassword="Forgotten your password?"  noaccount=""/></Col>
        </Row>
    </Container>
  )
}
// .sm\:w-\[540px\] md:w-[1200px]