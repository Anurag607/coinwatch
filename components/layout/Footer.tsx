import React from "react";
import classNames from "classnames";
import {
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={classNames({
        "w-full container mx-auto p-4 md:px-6 md:py-2": true,
        "sm:flex sm:items-center sm:justify-between gap-y-2": true,
        "text-zinc-500 rounded-lg shadow dark:bg-gray-900": true,
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
      <div className="flex justify-center items-center gap-4">
        <Link href="#">
          <LinkedinOutlined className="text-2xl text-blue-700" />
        </Link>
        <Link href="#">
          <FacebookOutlined className="text-2xl text-blue-700" />
        </Link>
        <Link href="#">
          <TwitterOutlined className="text-2xl text-blue-700" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
