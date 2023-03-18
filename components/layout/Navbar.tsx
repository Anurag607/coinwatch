import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { openSidebar } from "@/redux/reducers/sidebarSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
      })}
    >
      <div className="flex justify-center items-center gap-4">
        <Image src="/logo.png" width={42} height={42} alt="logo" />
        <h3
          className={classNames({
            "font-bold text-lg": true,
            "flex justify-center items-center gap-4": true,
          })}
        >
          Coinwatch
        </h3>
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={() => dispatch(openSidebar())}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
