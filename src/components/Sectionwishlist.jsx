import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Sectionwishlist(props) {
  return (
    <div style={{ backgroundColor: '#052428' }} className='w-full pb-20 flex justify-center items-center'>
      <Card className='w-60 h-72 border-0 rounded-none'>
        <Card.Img src={props.Image} className='w-60 h-52 border-0 rounded-none' />
        <Card.Body className='space-y-4 bg-black'>
        <Card.Title className='text-left text-white font-bold text-lg'>{props.tshirt}</Card.Title>
          <Card.Text className='text-left text-white font-bold text-lg'>
            {props.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
