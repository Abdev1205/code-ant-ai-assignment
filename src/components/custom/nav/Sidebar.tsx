"use client";

import React, { useEffect, useState } from "react";
import { menuData } from "@/constants/menuData";
import { SingleLink } from "./SingleLink";
import { MultiLink } from "./MultiLink";
import Image from "../Image";
import { LogoImage } from "@/assets/assetsManager";
import { LuLogOut } from "react-icons/lu";
import OrgSelector from "../select/OrgSelector";
import { IoCallOutline } from "react-icons/io5";
import { SignOutButton } from "@clerk/clerk-react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <aside
      className={`lg:w-[18rem] w-full lg:h-screen ${
        navOpen
          ? " h-screen absolute z-[100]  "
          : " h-[4rem] lg:relative absolute flex justify-center    "
      } bg-white border-r flex  flex-col`}
    >
      <div>
        <div className=" lg:shadow-none shadow-md  lg:h-[5.5rem] h-[4rem]  px-[1.5rem]  flex items-center gap-[.5rem]  ">
          <Image
            src={LogoImage}
            alt="agrivision"
            className="  w-[1.4rem]    "
          />
          <h2 className=" text-[1.3rem] font-[500] ">CodeAnt AI</h2>
        </div>

        <div>
          {navOpen ? (
            <IoClose
              onClick={() => setNavOpen(false)}
              className="absolute flex text-2xl cursor-pointer lg:hidden top-3 right-3"
            />
          ) : (
            <HiOutlineMenu
              onClick={() => setNavOpen(true)}
              className="absolute flex text-2xl cursor-pointer lg:hidden top-3 right-3"
            />
          )}
        </div>
      </div>

      <div
        className={`lg:flex ${
          navOpen ? " h-[0rem] " : " h-[0rem] hidden "
        } flex-col justify-between lg:h-[calc(100%-5.5rem)] h-[0rem] `}
      >
        <nav className=" flex  flex-col px-[1rem] mt-[.8rem]    ">
          <div>
            <OrgSelector />
          </div>
          {menuData.map((item) =>
            item.children ? (
              <MultiLink
                key={item.label}
                label={item.label}
                icon={item.icon}
                children={item.children}
              />
            ) : (
              <SingleLink
                key={item.label}
                label={item.label}
                icon={item.icon}
                path={item.path!}
              />
            )
          )}
        </nav>

        <div>
          <div className=" mt-[1rem] border-b-[1px] mb-[1rem] border-white/20 ">
            <div
              className={`flex items-center gap-2 px-[1rem] py-2  rounded-[.3rem] cursor-pointer text-black duration-300`}
            >
              <IoCallOutline />
              <span>Support</span>
            </div>
            <SignOutButton>
              <div
                className={`flex items-center gap-2 px-[1rem] py-2  rounded-[.3rem] cursor-pointer text-black duration-300`}
              >
                <LuLogOut />
                <span>Log Out</span>
              </div>
            </SignOutButton>
          </div>
        </div>
      </div>
    </aside>
  );
};
