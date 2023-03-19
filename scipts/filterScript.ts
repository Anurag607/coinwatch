import { setCoinData } from "@/redux/reducers/coinSlice";

const filterData = async (
  data: any,
  filterParam: string,
  reduxDispatch: React.Dispatch<any>
) => {
  let filteredData: any[] = [];
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${filterParam}&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          Content: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.status !== 404) filteredData = await response.json();
    console.log(filteredData);
    reduxDispatch(setCoinData(filteredData));
  } catch (err: any) {
    console.error(err);
  }
};

export default filterData;
