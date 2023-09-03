import React from 'react'
import rupayImage from "../assets/rupay.png";
import visaImage from "../assets/visa.png";
import googlepayImage from "../assets/googlepay.png";
import razorpayImage from "../assets/razorpay.png";
import mastercardImage from "../assets/mastercard.png";

export default function Cartpagecontent() {
  return (
    <div className='bg-black w-[420px] h-[700px] sm:w-[450px] md:w-[460px] lg:w-[525px] lg:h-[700px] xl:w-[525] xl:h-[700px] justify-center items-center m-auto'>
        <div className='flex flex-row text-base font-light sm:space-x-44 md:space-x-48 lg:space-x-64  text-white space-x-36 py-7 px-10'>
        <p className=''>Discounts</p>
        <p className=''>Apply Discounts</p>
        </div>
        <div className='space-y-16'>
        <div className='mx-12 lg:mx-14 md:mx-14 sm:mx-16'>
        <a href='/account'><button className='w-[304px] h-[64px] sm:w-[314px] md:w-[350px] lg:w-[414px] bg-white text-black text-base font-bold'>Log in</button></a>
        </div>
        <div className='flex flex-row gap-x-[195px] sm:gap-x-[195px] md:gap-x-[220px] lg:gap-x-[285px] xl:gap-x-[285px] justify-center py-2.5 text-base font-light text-white'>
      <p>Order value</p>
      <p>$22.00</p>
      </div>
      </div>
      <div className='flex flex-row  gap-x-[220px] sm:gap-x-[220px] md:gap-x-[250px] lg:gap-x-[310px] xl:gap-x-[310px] justify-center py-2.5 text-base font-light text-white'>
      <p>Delivery</p>
      <p>$22.00</p>
      </div>
      <div className='space-y-16'>
      <div className='flex flex-row  gap-x-[230px] sm:gap-x-[230px] md:gap-x-[260px] lg:gap-x-[320px] xl:gap-x-[320px] justify-center py-2.5 text-base font-bold text-white'>
      <p>Total</p>
      <p>$44.00</p>
      </div>
      <div className='mx-12 lg:mx-14 md:mx-14 sm:mx-16'>
            <button className='w-[304px] h-[64px] sm:w-[314px] md:w-[350px] lg:w-[414px] bg-white text-black text-lg font-bold'>Continue to checkout</button>
        </div>
      </div>
      <div>
        <p className='font-light text-base text-white pt-14 pl-12 sm:pl-16 md:pl-14 lg:pl-14 xl:pl-14 '>We accept</p>
        <div className='flex flex-row gap-x-2 sm:gap-x-3 md:gap-x-5 lg:gap-x-9 xl:gap-x-9 pt-4'>
          <img src={rupayImage} className='w-[16] h-[12] pl-12 sm:pl-16 md:pl-14 lg:pl-14 xl:pl-14 '></img>
          <img src={visaImage} className='w-[16] h-[12] '></img>
          <img src={googlepayImage} className='w-[16] h-[12] '></img>
          <img src={razorpayImage} className='w-[16] h-[12] '></img>
          <img src={mastercardImage} className='w-[16] h-[12] '></img>
        </div>
      </div>
    </div>
  )
}
