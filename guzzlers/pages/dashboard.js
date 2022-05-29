import Head from "next/head";
import React, { useState } from "react";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase/clientApp";

export default function dashboard() {

  return (
    <div>
      <Head></Head>
      <main>
        <div className="flex w-screen h-screen">
          <div className="m-auto p-16 bg-white text-center text-black rounded-md font-semibold text-3xl">
            <h1 className="text-4xl">Dashboard</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
