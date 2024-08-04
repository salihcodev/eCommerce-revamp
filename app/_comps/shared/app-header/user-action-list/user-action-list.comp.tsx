"use client";
import Link from "next/link";
import React, { FC, ReactNode, useState } from "react";

interface IUserActionList {
  listTitle: string;
  path: string;
  icon?: any;
}

const UserActionList: FC<IUserActionList> = ({ listTitle, path, icon }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleUserActionList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left flex-center group z-10">
      <div>
        <Link
          href={`/${path}`}
          onClick={toggleUserActionList}
          className="inline-flex justify-center hover:bg-gray-50 text-gray-700 text-sm"
        >
          <span className="block">{listTitle}</span>
          <span className="mx-2">{icon({ size: 20 })}</span>
        </Link>
      </div>

      <div className="origin-top-right absolute right-0 top-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 scale-0 group-hover:scale-100 before:block before:absolute before:bg-transparent before:-top-7 before:left-0 before:right-0 before:h-8">
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {listTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserActionList;
