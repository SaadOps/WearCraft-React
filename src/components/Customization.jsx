import React from "react";
import { Button, Image } from "react-bootstrap";
import Customization from "../assets/Customization.png";

const CustomizableTShirt = () => {
  return (
    <div className="w-full relative">
      <Image
        src={Customization}
        alt="Customizable T-Shirt"
        fluid
        className="w-100"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold font-weight-bold text-center max-w-lg px-4 pt-10 sm:pt-20 mt-10 sm:mt-60">
          Unlock limitless possibilities for personal expression with our
          customizable T-shirts. Share your design, size, and T-shirt variant,
          and our team will bring your vision to life.
        </p>
        <Button className="mt-4 py-2 px-4 sm:px-6 bg-[#710101] border-none hover:text-[#710101] hover:bg-white text-red rounded-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Customize Now
        </Button>
      </div>
    </div>
  );
};

export default CustomizableTShirt;
