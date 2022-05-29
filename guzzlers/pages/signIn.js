import Head from "next/head";
import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/clientApp";
import Nav from "../components/nav";

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  return (
    <div>
      <Head></Head>
      <Nav />
      <main>
          
        <div className="flex w-screen h-screen">
          <div className="m-auto p-16 bg-white text-center text-black rounded-md font-semibold text-3xl">
            <h1 className="text-4xl">Sign in to Green.house</h1>

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
              onClick={() => signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                })}
            >
              Sign in with Email
            </button>
            <button
              className="bg-emerald-400 py-2 px-4 rounded-md font-semibold ml-4"
              onClick={() => signInWithPopup(auth, provider)
                .then((result) => {
                  const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                  const token = credential?.accessToken;
                  const user = result.user;
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  const email = error.email;
                  const credential =
                    GoogleAuthProvider.credentialFromError(error);
                })}
            >
              Sign in with Google
            </button>
            <h2 className="mt-8">
              Don't have an account?{" "}
              <a href="/createAccount" className="text-emerald-600">
                Create one now.
              </a>
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
