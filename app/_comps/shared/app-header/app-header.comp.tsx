"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import logoWhite from "../../../../public/logo-white.svg";
import authLogo from "../../../../public/non-exp-header-logo.svg";
import Image from "next/image";
import CatsListDropdown from "./cats-list/cats-list.comp";
import UserAreaDropdown from "./user-area/user-area.comp";
import { appHeaderRoutes } from "@/app/_common/constants/header-links.const";
import UserActionList from "./user-action-list/user-action-list.comp";
import { FiShoppingCart, FiHeart, FiPackage } from "react-icons/fi";

const AppHeader: FC<{ type?: `expanded` | `mini` | `authy` }> = ({
  type = `expanded`,
}) => {
  return (
    <header className="bg-white border-b">
      {type === `expanded` ? (
        <div className="container mx-auto">
          <div className="flex-center h-16 gap-4">
            {/* l-wrapper */}
            <div className="flex">
              {/* logo */}
              <div className="h-full w-40">
                <Link href="/" className="size-full">
                  <Image
                    src={logoWhite}
                    alt="fullcart logo"
                    style={{ width: `100%`, height: `100%` }}
                  />
                </Link>
              </div>
              {/* cats-list-wrapper */}
              <div className="flex-center">
                <CatsListDropdown />
              </div>
            </div>
            {/* m-wrapper */}
            <div className="grow">seach</div>
            {/* r-wrapper */}
            <div className="flex">
              <div className="grow flex">
                {appHeaderRoutes.appHeaderPlainLinks.map(({ path, text }) => {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="text-gray-700 text-sm mx-2 flex-center"
                    >
                      {text}
                    </Link>
                  );
                })}
              </div>
              <div className="grow flex gap-2 mx-4">
                <UserActionList
                  icon={FiShoppingCart}
                  path="cart"
                  listTitle="Cart"
                />
                <UserActionList
                  icon={FiHeart}
                  path="wisthlist"
                  listTitle="Wisthlist"
                />
                <UserActionList
                  icon={FiPackage}
                  path="orders"
                  listTitle="Orders"
                />
              </div>

              {/* user-area */}
              <div className="">
                {true ? (
                  <Link href="/login" className="text-gray-700 text-sm">
                    Login
                  </Link>
                ) : (
                  <UserAreaDropdown />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : type === `authy` ? (
        <div className="container mx-auto">
          <div className="flex-center justify-center">
            <Link href="/" className="h-24">
              <Image
                src={authLogo}
                alt="fullcart logo"
                style={{ width: `100%`, height: `100%` }}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div>mini</div>
      )}
    </header>
  );
};

export default AppHeader;
