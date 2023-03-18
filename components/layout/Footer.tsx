import React from "react";
import classNames from "classnames";
import {
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className={classNames({
        "w-full text-zinc-500": true,
        "flex items-center justify-center gap-[70vw]": true,
        "h-[3rem]": true,
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
        <LinkedinOutlined className="text-2xl text-blue-700" />
        <FacebookOutlined className="text-2xl text-blue-700" />
        <TwitterOutlined className="text-2xl text-blue-700" />
      </div>
    </div>
  );
};

export default Footer;
