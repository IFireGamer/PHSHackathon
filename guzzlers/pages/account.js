import Head from "next/head";
import React, { useState } from "react";
import { auth } from "../firebase/clientApp";
import Nav from "../components/nav";
export default function dashboard() {

  return (
    <div>
      <Head></Head>
      <Nav />
      <main>
        <div className="flex w-screen h-screen">
          <div className="m-auto p-16 bg-white text-center text-black rounded-md font-semibold text-3xl">
            <h1 className="text-4xl">Account</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
