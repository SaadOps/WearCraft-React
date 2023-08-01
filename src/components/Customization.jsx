import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Customization from '../assets/Customization.png';

const CustomizableTShirt = () => {
  return (
    <div className="w-full relative">
      <Image src={Customization} alt="Customizable T-Shirt" fluid className="w-100" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold font-weight-bold text-center max-w-md px-4"> {/* Added px-4 for horizontal padding */}
          Unlock limitless possibilities for personal expression with our customizable T-shirts.
          Share your design, size, and T-shirt variant, and our team will bring your vision to life.
        </p>
        <Button variant="danger" className="mt-4">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CustomizableTShirt;
