import { NextApiRequest, NextApiResponse, NextPage } from "next";
import React from "react";
import Table from "@/components/layout/Table";

const HomePage: NextPage<{ ranklist: any }> = ({ ranklist }) => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <Table data={ranklist} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({
  req,
  res,
  params,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  params: any;
}) {
  const response = await fetch(process.env.NEXT_PUBLIC_CRYPTOLIST!, {
    method: "GET",
    mode: "cors",
    headers: {
      Content: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!response.ok) {
    return {
      props: {
        ranklist: [],
      },
    };
  }

  const data = await response.json();
  return {
    props: {
      ranklist: data,
    },
    revalidate: 60 * 60 * 24, //1day in seconds
  };
}

export default HomePage;
