import { NextPage } from "next";
import React from "react";
import Table from "@/components/layout/Table";
import { useDispatch, useSelector } from "react-redux";
import { setCoinData } from "@/redux/reducers/coinSlice";
import classNames from "classnames";
import SearchBar from "@/components/layout/SearchBar";
import CategoryFetcher from "@/scipts/fetchScript";
import Filter from "@/components/layout/Filter";

const HomePage: NextPage<{ ranklist: any }> = ({ ranklist }) => {
  const dispatch = useDispatch();
  const { backupData, categoryData } = useSelector((state: any) => state.coins);
  React.useEffect(() => {
    if (ranklist.length > 0) {
      dispatch(setCoinData(ranklist));
      if (categoryData.length === 0) CategoryFetcher(dispatch);
    } else {
      dispatch(setCoinData(backupData));
    }
  }, [ranklist]);

  return (
    <div className="relative container">
      <div
        className={classNames({
          "relative flex flex-col items-center justify-center max-h-fit w-full":
            true,
          "overflow-x-hidden": true,
          "pt-2": true,
        })}
      >
        <div
          className={classNames({
            "absolute top-2 h-[8vh] w-full": true,
            "flex items-center justify-center gap-4": true,
            "filter-search-bar:justify-start": true,
            "filter-search-bar:ml-14": true,
          })}
        >
          <SearchBar />
          <Filter />
        </div>
        <Table />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_CRYPTOLIST!, {
      method: "GET",
      mode: "cors",
      headers: {
        Content: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    return {
      props: {
        ranklist: data,
      },
      // revalidate: 60 * 60 * 1, //1hour in seconds
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        ranklist: [],
      },
    };
  }
}

export default HomePage;
