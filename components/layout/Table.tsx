import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCoinData } from "@/redux/reducers/coinSlice";
import SortArrows from "./SortArrows";
import RankImage from "./RankImage";
import sortData from "@/scipts/sortingScript";

const Table = () => {
  const { coinData, sort_market_cap, sort_current_price } = useSelector(
    (state: any) => state.coins
  );
  const dispatch = useDispatch();

  return (
    <div
      className={classNames({
        "relative shadow-md sm:rounded-lg": true,
        "bg-white": true,
        "flex items-start justify-center": true,
        "h-[66.5vh] w-auto mt-[0.5rem] mx-[1.5rem]": true,
        "overflow-y-scroll overflow-x-auto": true,
        "hover:table-fixed": true,
        "mt-[10vh]": true,
      })}
    >
      <table className="w-auto rounded-lg overflow-x-auto table-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className={classNames({
            "text-xs text-gray-700 uppercase": true,
            "bg-white border-b": true,
            "dark:bg-gray-700 dark:text-gray-400 dark:border-gray-700": true,
            "rounded-lg": true,
          })}
        >
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
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    let sortedData = sortData(
                      coinData,
                      sort_current_price,
                      "current_price",
                      dispatch
                    );
                    dispatch(setCoinData(sortedData));
                  }}
                >
                  <SortArrows />
                </div>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Market Cap
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    let sortedData = sortData(
                      coinData,
                      sort_market_cap,
                      "market_cap",
                      dispatch
                    );
                    dispatch(setCoinData(sortedData));
                  }}
                >
                  <SortArrows />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((coin: any, i: number) => {
            return (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 text-right">
                  <RankImage imageURL={coin.image} rank={i + 1} />
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
