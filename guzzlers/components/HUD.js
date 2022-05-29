import React, { useState } from 'react';

export default function HUD(){
    return(
        <svg x='170' y='991' className='absolute bottom-0' width="1586" height="89" viewBox="0 0 1586 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 45C0 20.1472 20.1472 0 45 0H1541C1565.85 0 1586 20.1472 1586 45V89H0V45Z" fill="#EEFFEB"/>
            <text x='50' y='60' className='pl-96 pt-48 font-bold text-[2rem] fill-brown'>
            Speculated Cash: insert variable here
            </text>
            <text x='800' y='55' className='pl-96 pt-48 font-bold text-[2rem] fill-brown'>
            Liquid Cash: insert variable here
            </text>
        </svg>
    )
}