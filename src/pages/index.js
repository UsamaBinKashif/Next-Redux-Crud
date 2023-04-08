/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Login from "../components/Login";
import { useSelector } from "react-redux";
import HomePage from "@/components/HomePage";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Head>
        <title>EARTH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="" >{isLoggedIn === true ? <HomePage /> : <Login />}</main>
    </>
  );
}
