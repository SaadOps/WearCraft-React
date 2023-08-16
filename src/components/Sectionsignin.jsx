import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Sectionsignin(props) {
  return (
    <div className='bg-[#052428] py-10 '>
    <Form className='w-[400px] bg-black h-10/12  py-3 space-y-5 text-white  flex flex-col justify-center items-center'>
    <Form.Text className="text-white text-4xl">
       {props.title}
        </Form.Text>
      <Form.Group className="space-y-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required className='w-72 h-9  rounded-none'/>
        
      </Form.Group>

      <Form.Group className="space-y-3" controlId="formBasicPassword">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" placeholder="Password" required className='w-72 h-9 rounded-none'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button  type="submit" className=' w-40 h-11 hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.25)] bg-black rounded-full border-white'>
        Submit
      </Button>

      <Form.Text className="text-white ">
     {props.forgotpassword}
        </Form.Text>
        <Form.Text className="text-white">
        {props.noaccount}
        </Form.Text>

      <Button type="submit" className='w-40 h-8  rounded-none '>
        Login with Google
      </Button>
    </Form>
    </div>
  )
}
