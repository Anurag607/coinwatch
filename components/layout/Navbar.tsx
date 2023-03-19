import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";
import { openMenu, closeMenu } from "@/redux/reducers/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type Props = {
  navItems?: NavItem[];
};

const Navbar = ({ navItems = defaultNavItems }: Props) => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: any) => state.menu);

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
      <button className="md:hidden cursor-pointer z-[1000]">
        <Bars3Icon
          className="h-6 w-6 cursor-pointer z-[1000]"
          onClick={() => {
            !isMenuOpen ? dispatch(openMenu()) : dispatch(closeMenu());
          }}
        />
      </button>
      <ul
        className={classNames({
          "flex flex-col gap-2": true,
          "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700":
            true,
          "absolute top-[4.5rem] right-2": true,
          "md:hidden": true,
          "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
          "w-0 py-2": !isMenuOpen,
        })}
      >
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <li
                className={classNames({
                  "text-indigo-900 hover:bg-indigo-900 hover:text-white": true, //colors
                  "flex gap-4 items-center ": true, //layout
                  "transition-colors duration-300": true, //animation
                  "rounded-md p-2 mx-2": true, //self style
                  "cursor-pointer": true,
                })}
              >
                {item.icon} {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
