"use client";
import React, { useState } from "react";
import { TbGrid3X3 } from "react-icons/tb";

const CatsListDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCatsListDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          onClick={toggleCatsListDropdown}
          className="flex-center w-full rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span>Categories</span>
          <span>
            <TbGrid3X3 size={20} className="ml-4" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-lift absolute lift-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sports
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatsListDropdown;
