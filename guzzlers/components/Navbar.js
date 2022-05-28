import Link from 'next/link';
import { auth } from "../firebase/clientApp";
import Login from '../components/login';
import React, { useState } from 'react';

export default function Navbar({ user }) {

    const [modal, setModal] = useState('opacity-0 pointer-events-none')

    const login = () => {
        setModal('opacity-100 ');
    };

    const logout = () => {
        auth.signOut();
    };

    return (
        <div className="bg-neutral-900 w-screen h-16 shadow-md">
            <div className='container mx-auto flex h-full px-2'>
                <div className="my-auto">
                    <Link href="/"><h1>Green Guzzlers</h1></Link>
                </div>
                <div className='ml-auto flex'>
                    <div className='my-auto bg-neutral-800 py-1 px-3 rounded-md flex hover:cursor-pointer' >
                        {
                            user ?
                                <h1 className='text-xl' onClick={logout}>Log Out</h1>
                                :
                                <h1 className='text-xl' onClick={login}>Log In</h1>
                        }


                    </div>
                </div>
            </div>
            {/* need to style the modal even more */}
            <div className={modal}>
                <Login />
            </div>
        </div>
    );
}