import React from 'react'


export default function Orderhistorytitle(props) {
  return (
    <div className='flex bg-black w-[500px] h-[81px] text-xs sm:text-sm md:text-base lg:text-lg sm:w-[600px] md:w-[800px] lg:w-[1150px] xl:w-[1250px] lg:gap-x-12  justify-center items-center gap-x-2.5 border-2 border-white m-auto'>
    <div className="outer-heading ">
      <p className="text-white">Order Placed: {props.orderplaced}</p>
    </div>
  
    <div className="outer-heading ">
      <p className="text-white">Total: {props.totalamount}</p>

    </div>
  
    <div className="outer-heading ">
      <p className="text-white">Shipped to: {props.shippedto}</p>

    </div>
  
    <div className="outer-heading ">
      <p className="text-white">Order ID: {props.orderid}</p>

    </div>
    <div className="outer-heading ">
      <p className="text-white">Order Status: {props.orderstatus}</p>

    </div>
    </div>
  
)
}

