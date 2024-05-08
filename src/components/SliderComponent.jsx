import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const SliderComponent = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId); // Cleanup
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <button
        className=" absolute top-1/2 left-4  transform -translate-y-1/2 bg-gradient-to-tl text-white  px-3 py-1 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        <FaChevronLeft/>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-tl text-white px-3 py-1 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        <FaChevronRight/>
      </button>
      <img
        src={images[currentImageIndex]}
        alt="slide"
        className=" h-[675px] w-full"
      />
    </div>
  );
};

export default SliderComponent;