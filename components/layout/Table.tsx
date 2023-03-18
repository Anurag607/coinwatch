import React from "react";
import classNames from "classnames";
import Image from "next/image";

const RankImage = ({ imageURL, rank }: { imageURL: string; rank: number }) => {
  return (
    <div
      className={classNames({
        "relative w-auto": true,
        "flex item-center justify-content-center": true,
        "rounded-full": true,
      })}
    >
      <Image src={imageURL} width={45} height={45} alt="coinImage" />
      <div
        className={classNames({
          "absolute top-0 bottom-0 left-0 right-0": true,
          "px-4 py-2": true,
          "bg-gray-800 opacity-60": true,
          "rounded-full": true,
        })}
      >
        <h3 className="text-xl text-white font-bold">{rank}</h3>
      </div>
    </div>
  );
};

const Table = ({ data }: { data: any }) => {
  return (
    <div className="relative overflow-x-scroll overflow-y-scroll shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Name (Symbol)</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Current Price
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Market Cap
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: any, i: number) => {
            return (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 text-right">
                  <RankImage
                    imageURL={coin.image}
                    rank={coin.market_cap_rank}
                  />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {coin.name} ({coin.symbol})
                </th>
                <td className="px-6 py-4">${coin.current_price}</td>
                <td className="px-6 py-4">${coin.market_cap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
