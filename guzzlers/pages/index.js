import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'

import ClientPage from '../components/ClientPage'
//import Navbar from '../components/Navbar'

import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {

  const [user, loading, error] = useAuthState(auth);


  const axios = require("axios").default;

  const options = {
    method: 'GET',
    url: 'https://cloud.iexapis.com/stable/stock/tsla/quote',
    params: {
      token: process.env.NEXT_PUBLIC_IEX_API_KEY
    }
  };

  axios.request(options).then(function (response) {
    const dataOfStock = response.data;
    console.log(dataOfStock.symbol + "\n" +
      "Open: " + dataOfStock.open + "\n" +
      "Close: " + dataOfStock.close + "\n" +
      "Day high: " + dataOfStock.high + "\n" +
      "Day low: " + dataOfStock.low + "\n" +
      "Last price: " + dataOfStock.latestPrice + "\n" +
      "Previous close: " + dataOfStock.previousClose + "\n" +
      "Year high: " + dataOfStock.week52High + "\n" +
      "Year low: " + dataOfStock.week52Low + "\n"
    );
  }).catch(function (error) {
    console.error(error);
  });


  return (
    <div>
      <Head>
        <title>Green.house</title>
        <meta name="description" content="Green.house" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        {/* <ClientPage /> */}

        <Nav user={user}/>
      </main>

    </div>
  )
}
