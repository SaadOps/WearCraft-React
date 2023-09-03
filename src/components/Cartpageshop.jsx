import React from 'react'


export default function Cartpageshop(props) {
  return (
    <div className=''>
      {/* <div><p className='text-4xl'>SHOPPING BAG</p></div> */}
      <div className='flex flex-row gap-x-4  justify-center items-center m-auto text-white'>
      <div><img src={props.cartimage} className='w-[54] h-[152]'></img></div>
      <div>
      <p className='font-medium text-xl py-2'>Wide pull-on trousers</p>
      <p className='text-base'>Rs. 2,199.00</p>
      <div className='space-y-2'>
      <div className='flex flex-row gap-x-4 py-2.5 text-xs'>
      <p>Size: M</p>
      <p>Total: Rs. 2,199</p>
      </div>
      <div className='flex flex-row gap-x-4'>
      <button className='bg-transparent border-2 border-black w-[29px] h-[29px] '>&#9829;</button>
      <button className='bg-transparent border-2 border-black w-[43px] h-[29px] '>1&#x2B9F;</button>
      <button className='bg-transparent border-2 border-transparent w-[15px] h-[29px] pl-20'>X</button>
      </div>
      </div>
      </div>
      </div>

    </div>
  )
}
