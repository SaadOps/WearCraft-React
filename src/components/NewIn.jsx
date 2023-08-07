import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import New1 from '../assets/New1.png';
import New2 from '../assets/New2.png';
import New3 from '../assets/New3.png';


function BasicExample() {
  return (
    <div className='bg-[#052428] d-flex justify-content-center align-items-center text-white pl-10 ' style={{ minHeight: '100vh' }}>
      <div className="row justify-content-center no-gutters ">
        <hr className="border-t-4 border-white my-4" />
      <h1 className="text-4xl font-bold text-white text-center mb-4">New In</h1>
        <Card style={{ width: '16rem' }} className="mb-3 mr-10  px-0 bg-transparent text-white" >
          <Card.Img variant="top" src={New1} />
          <Card.Body className='bg-black rounded-[15px]'>
            <Card.Title>Cotton jersey T-shirt</Card.Title>
            <Card.Text className='font-bold'>
              Rs. 599
            </Card.Text>
            <Button className="bg-transparent border border-white text-white px-8 py-1.5 mt-2 ">
              Select options
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }} className="mb-3 mr-10  px-0 bg-transparent text-white">
          <Card.Img variant="top" src={New2} />
          <Card.Body className='bg-black rounded-[15px]'>
            <Card.Title>Cotton graffiti T-shirt</Card.Title>
            <Card.Text className='font-bold'>
              Rs. 599
            </Card.Text>
            <Button className="bg-transparent border border-white text-white px-8 py-1.5 mt-2 ">
              Select options
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }} className="mb-3 mr-10  px-0 bg-transparent text-white">
          <Card.Img variant="top" src={New3} />
          <Card.Body className='bg-black rounded-[15px]'>
            <Card.Title>Oversized graffiti print  </Card.Title>
            <Card.Text className='font-bold'>
              Rs. 599
            </Card.Text>
            <Button className="bg-transparent border border-white text-white px-8 py-1.5 mt-2 ">
              Select options
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;




