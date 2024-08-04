"use client";

import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const slides = [
  { id: 1, text: "Silde Number #1" },
  { id: 2, text: "Silde Number #2" },
  { id: 3, text: "Silde Number #3" },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full"
          >
            <BsChevronLeft className="h-6 w-6 text-white" />
          </button>
          <h2 className="text-4xl font-extrabold">
            {slides[currentSlide].text}
          </h2>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full"
          >
            <BsChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
        <a
          href="#features"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
