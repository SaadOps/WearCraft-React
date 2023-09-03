import React from 'react'
import historyImage from "../assets/Orderhistoryimage.png";

export default function Orderhistorycontent(props) {
  return (
    <div className='bg-black w-[320px] h-[500px] sm:w-[450px] md:w-[460px] lg:w-[481px] xl:w-[481] justify-center items-center m-auto'>
        <div className='delivered py-3.5'><p className='text-white font-semibold text-sm ml-7 '>Delivered: {props.deliverydate}</p></div>
      <div className='items-center sm:flex md:flex'><img className='w-[150px] h-[200px] ml-[80px] sm:ml-[144px] md:ml-[154px] lg:ml-[164px] xl:ml-[164px]' src={props.historyimg}/>
      <p className='text-white py-2 md:py-4 ml-7 sm:ml-[0px] md:ml-[0px] lg:ml-[0px] xl:ml-[0px] pl-[45px] lg:pl-[26px] '>{props.productname}</p></div>
      <div className='flex flex-column gap-y-2 my-3'>
      <button className='bg-white text-black w-44 h-10 m-auto rounded-sm text-xs font-semibold'>Rate the Product</button>
      <button className='bg-white text-black w-44 h-10 m-auto rounded-sm text-xs font-semibold'>Leave a feedback</button>
      <button className='bg-white text-black w-44 h-10 m-auto rounded-sm text-xs font-semibold'>Report a issue</button>
      <button className='bg-white text-black w-44 h-10 m-auto rounded-sm text-xs font-semibold'>Download order invoice</button>
      </div>
    </div>
  )
}
