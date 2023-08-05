import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import taglineImage from '../assets/Tagline.png';

const HeroSection = () => {
  return (
    <div className="bg-[#052428] w-full ">
      <Container className="h-screen flex flex-col justify-center items-center">
        <Row className="h-full w-full">
          <Col className="flex justify-center items-center">
            <div className="relative">
              <Image src={taglineImage} className="max-w-full h-auto bg-black" alt="Alt text" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
                  <span className="text-[#D4CFA1]">We</span> <span className="text-black">Craft</span> 
                  <span className='text-black'> your</span>
                  <span className="text-[#D4CFA1]"> Vision</span>
                </h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

