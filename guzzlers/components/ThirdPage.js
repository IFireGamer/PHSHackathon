import React, { useState } from 'react';

export default function SecondPage(){
    return(
        <svg className='w-full h-full bg-grassgreen' viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/*Background*/}
          <path d="M0 0H1920V1080H0V0Z" fill="url(#paint0_radial_0_1)"/>
          {/*Title*/}
          <text x='1300' y='547' className='pl-96 italic font-thin text-[3rem] fill-brown'>
            How it Works
          </text>

          {/*Text*/}
          <>
          <text x='100' y='194'className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            We use IEX Cloud to track top performing
          </text>
          <text x='100' y='264' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            stocks, and invest in them based on the
          </text>
          <text x='100' y='334' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            user's preference.
          </text>


          <text x='100' y='474' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            The user can choose which types of 
          </text>
          <text x='100' y='544' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            companies they wish to invest in and how 
          </text>
          <text x='100' y='614' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            much money to invest in them.
          </text>

          <text x='100' y='754' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            In addition to holding stock for the user,
          </text>
          <text x='100' y='824' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            we recommend new stocks to invest in as
          </text>
          <text x='100' y='894' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            well as display historical data.
          </text>
          </>

          <defs>
            {/*Background Gradient*/}
            <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1185.5 1164.5) rotate(-94.4512) scale(1005.03 1786.72)">
              <stop offset="0.198494" stop-color="#43F464"/>
              <stop offset="1" stop-color="#61D9FF"/>
            </radialGradient>
          </defs>
        </svg>
    )
}