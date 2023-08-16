import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





function Section(props) {
  return (
    <div style={{ backgroundColor: '#052428' }} className='w-full pb-20 flex justify-center items-center'>
      <Card className='w-72 border-0 rounded-none'>
        <Card.Img src={props.Image} className='w-72 h-80 border-0 rounded-none' />
        <Card.Body className='space-y-4 bg-black'>
        <Card.Title className='text-left text-white font-bold text-lg'>{props.tshirt}</Card.Title>
          <Card.Text className='text-left text-white font-bold text-lg'>
            {props.price}
          </Card.Text>
          <Button href={props.link} className='w-40 h-5 pt-0 pb-4 ml-10 bg-black hover:bg-black text-black text-base text-white font-bold border-white rounded-none'>Shop Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Section;

