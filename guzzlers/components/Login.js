import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import React, { useState } from "react";

export default function Login() {

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');


    const provider = new GoogleAuthProvider();

    function googleSignIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    function emailSignIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function emailCreateAccount(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    // Need to style everything here

    return (
        <div className="fixed w-full h-full top-0 left-0">
            <div className="flex w-full h-full">
                <div className="m-auto bg-neutral-900 px-32 py-8 text-white text-center rounded-md">
                    <div className='flex'>
                        <div className='w-1/2'>
                            <p>Email</p>
                            <input type="text" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
                            <p>Password</p>
                            <input type='text' value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
                            <button onClick={() => emailSignIn(signInEmail, signInPassword)} className='bg-neutral-800 text-xl p-4 rounded-md mt-4'>Sign in</button>
                        </div>
                        <div className='w-1/2'>
                            <button onClick={() => googleSignIn()} className='bg-neutral-800 text-xl p-4 rounded-md mt-4'>Sign in With Google</button>
                        </div>
                    </div>
                    <h3 className='text-2xl mt-4'>Or, create an account</h3>
                    <p>Email</p>
                    <input type="text" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
                    <p>Password</p>
                    <input type='text' value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
                    <br />
                    <button onClick={() => emailCreateAccount(signUpEmail, signUpPassword)} className='bg-neutral-800 text-xl p-4 rounded-md mt-4'>Create Account</button>
                </div>
            </div>
        </div>
    )
}