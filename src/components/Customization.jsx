import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Customization.css';
import customizationImage from '../assets/Customization.png';
import { Content } from 'antd/lib/layout/layout';

function CardOnImage() {
  return (
    <div className=" relative w-full max-w-full max-h-612px">
      <Image src={customizationImage} style={{ width: '100%', maxWidth: '100%', maxHeight: '612px' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Card className="  border-none bg-transparent ">
          <Card.Body className='body-text'>
            <Card.Title className="custom-text ">
            Unlock limitless possibilities for personal expression with our customizable T-shirts. Share your design, size, and T-shirt variant and our team will bring your vision 
to life.
            </Card.Title>
            <Button
          
              className=" custom-button "
            >
              Customize Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardOnImage;
