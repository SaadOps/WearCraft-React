import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import Gpay from '../assets/Gpay.svg';
import visa from '../assets/visa.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-4">
      <Container>
        <Row className="items-center">
          <Col md={4} className="text-center md:text-left">
            <h1 className="mx-auto md:mx-0 text-5xl py-5">WearCraft</h1>
            <div className="flex justify-center md:justify-start md:pl-20 pb-20 ">
              <Image
                src={insta}
                alt="Instagram"
                width="24"
                height="24"
                className="mr-6"
              />
              <Image
                src={facebook}
                alt="Facebook"
                width="24"
                height="24"
                className="mr-6"
              />
              <Image
                src={twitter}
                alt="Twitter"
                width="24"
                height="24"
              />
            </div>
          </Col>
          <Col md={8} className="text-center md:text-right">
            <div className="flex justify-end">
              <div className="text-left">
                <ul className='md:text-xl'>
                  <h2 className="text-2xl font-bold">Our Policies</h2>
                  <li><a href="/about-us">About us</a></li>
                  <li><a href="/contact-us">Contact us</a></li>
                  <li><a href="/privacy-policy">Privacy and Policy</a></li>
                  <li><a href="/shipping-policy">Shipping Policy</a></li>
                  <li><a href="/terms-and-conditions">Terms and Condition</a></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="border-white my-4" />
      <Container>
        <Row>
          <Col md={8}></Col>
          <Col md={4} className="text-right flex justify-end ">
            <Image
              src={Gpay}
              alt="Gpay"
              className="mr-4 w-10 h-15 -mt-4"
            />
            <Image
              src={visa}
              alt="Visa"
              className="w-10 h-15 -mt-4"

            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;