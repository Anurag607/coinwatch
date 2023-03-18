import { NextApiRequest, NextApiResponse, NextPage } from "next";
import React from "react";
import Table from "@/components/layout/Table";
import { useDispatch, useSelector } from "react-redux";
import { setCoinData } from "@/redux/reducers/coinSlice";

const HomePage: NextPage<{ ranklist: any }> = ({ ranklist }) => {
  const dispatch = useDispatch();
  const { backupData } = useSelector((state: any) => state.coins);
  React.useEffect(() => {
    if (ranklist.length > 0) {
      dispatch(setCoinData(ranklist));
    } else {
      dispatch(setCoinData(backupData));
    }
  }, [ranklist]);

  return (
    <div className="relative container">
      <div className="relative flex flex-col items-center justify-center min-h-fit w-full">
        <Table />
      </div>
    </div>
  );
};

export async function getStaticProps() {
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
      revalidate: 60 * 60 * 1, //1hour in seconds
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
