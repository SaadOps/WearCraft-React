import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sectionsignin from './Sectionsignin';

export default function Signinpage() {
  return (
    <Container-fluid className=''>
        <Row className='bg-[#052428] '>
        <Col className='flex justify-center items-center'><Sectionsignin title="Login" forgotpassword="Forgotten your password?"  noaccount="No Account? Sign up"/></Col>
        <Col className='flex justify-center items-center'><Sectionsignin title="Register" forgotpassword="Forgotten your password?"  noaccount=""/></Col>
        </Row>
    </Container-fluid>
  )
}
