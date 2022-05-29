import React, { useState } from 'react';

export default function FirstPage(){
    return(
        <svg className='w-full h-full bg-grassgreen' viewBox="00 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <rect width="1920" height="1080" fill="#61D9FF"/>
          <path d="M1004.47 631.909C555.448 873.509 147.731 837.909 0 789.909V1079.91H1920V485.409C1801.92 433.575 1453.49 390.309 1004.47 631.909Z" fill="#43F464"/>
          <path d="M1022.57 892.841C825.159 1035.24 273.452 1020.66 0 992.523V1080H1920V808.415C1717.96 779.256 1248.3 730 1022.57 892.841Z" fill="#1FDA80"/>
          
          {/*Title*/}
          <text x='215' y='547' className='pl-96 font-thin text-[6rem] fill-brown'>
            Green.house
          </text>

          {/*Guzzlers*/}
          <text x='215' y='594' className='pl-96 pt-48 font-bold text-[2rem] fill-brown'>
            A Guzzlers Production
          </text>

          {/*Circle*/}
          <svg x='910' y="1000" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white"/>
            <rect x="34" y="12" width="11" height="44" fill="black"/>
            <path d="M57.6097 36.4442L65.4285 43.8692L39.8187 68.1892L31.9999 60.7642L57.6097 36.4442Z" fill="black"/>
            <path d="M14 43.8491L21.8188 36.4242L44.437 57.9032L36.6182 65.3282L14 43.8491Z" fill="black"/>
          </svg>
        </svg>
    )
}