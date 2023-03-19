import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>CoinWatch</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
