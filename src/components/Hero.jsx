import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import './Hero.css';
import Button from 'react-bootstrap/Button';
import heroImage from '../assets/Hero.png';

function CardOnImage() {
  return (
    <div className="relative w-full max-w-full max-h-612px">
      <Image src={heroImage} style={{ width: '100%', maxWidth: '100%', maxHeight: '612px' }} />
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Card className=" border-none bg-transparent ">
          <Card.Body className='card-body'>
            <Card.Title className="custom-initial-font-size1  ">
              Discover the new you.
            </Card.Title>
            <Button
          
              className="shop-button"
            >
              Shop Now
            </Button>
            <Card.Text className="custom-initial-font-size ">
              We know your expectations about clothes.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardOnImage;
