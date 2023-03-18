import React from "react";
import classNames from "classnames";
import Image from "next/image";

const RankImage = ({ imageURL, rank }: { imageURL: string; rank: number }) => {
  return (
    <div
      className={classNames({
        "relative w-auto": true,
        "flex item-center justify-center": true,
        "rounded-full": true,
        "overflow-hidden": true,
      })}
    >
      <Image src={imageURL} width={45} height={45} alt="coinImage" />
      <div
        className={classNames({
          "absolute top-0 bottom-0 left-0 right-0": true,
          "px-4 py-2": rank >= 10 ? false : true,
          "px-3 py-2": rank < 10 ? false : true,
          "bg-gray-800 opacity-60": true,
          "rounded-full": true,
        })}
      >
        <h3 className="text-xl text-white font-bold">{rank}</h3>
      </div>
    </div>
  );
};

export default RankImage;
