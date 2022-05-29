import Head from "next/head";
import React, { useState } from "react";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase/clientApp";

export default function createAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Head></Head>
      <main>
        <div className="flex w-screen h-screen">
          <div className="m-auto p-16 bg-white text-center text-black rounded-md font-semibold text-3xl">
            <h1 className="text-4xl">Create a Green.house account</h1>

            <input
              className="mt-4 bg-emerald-50 rounded-sm"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="mt-4 bg-emerald-50 rounded-sm"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <button
              className="bg-emerald-400 py-2 px-4 rounded-md font-semibold mt-4"
              onClick={() =>
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    const user = userCredential.user;
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  })
              }
            >
              Create account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
