import React, { useState } from 'react';

export default function SecondPage(){
    return(
        <svg className='w-full h-full bg-grassgreen' viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/*Background*/}
          <path d="M0 -18H1920V1080H0V-18Z" fill="url(#paint0_linear_0_1)"/>
          
          {/*Small Tree*/}
          <g filter="url(#filter0_d_0_1)">
            <rect x="1207.96" y="895.8" width="14.087" height="37.2" fill="#897065"/>
            <path d="M1215 871L1238.38 913.75H1191.62L1215 871Z" fill="#43F464"/>
          </g>

          {/*Medium Tree*/}
          <g filter="url(#filter1_d_0_1)">
            <rect x="1291" y="838" width="24" height="98" fill="#897065"/>
            <path d="M1303 815L1346.3 899H1259.7L1303 815Z" fill="#31E52D"/>
            <path d="M1303 802L1337.64 866.5H1268.36L1303 802Z" fill="#43F464"/>
          </g>

          {/*Big tree*/}
          <g filter="url(#filter2_d_0_1)">
            <rect x="1417" y="830" width="36" height="98" fill="#897065"/>
            <path d="M1435 697L1506.01 854.5H1363.99L1435 697Z" fill="#06C302"/>
            <path d="M1435 697L1498.22 818.5H1371.78L1435 697Z" fill="#31E52D"/>
            <path d="M1434.5 697L1489.49 788.5H1379.51L1434.5 697Z" fill="#43F464"/>
          </g>
          
          {/*Title*/}
          <text x='215' y='547' className='pl-96 italic font-thin text-[3rem] fill-brown'>
            The Beginner's Broker
          </text>

          {/*Text*/}
          <>
          <text x='1000' y='394'className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            We at Green.house seek to make
          </text>
          <text x='1000' y='464' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            the world of stocks easier to
          </text>
          <text x='1000' y='534' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            comprehend for laypeople by 
          </text>
          <text x='1000' y='604' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            visualizing the growth in 
          </text>
          <text x='1000' y='674' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            equity with trees.
          </text>
          <text x='1000' y='744' className='pl-96 pt-48 font-bold text-[3rem] fill-brown'>
            
          </text>
          </>


          <defs>
            {/*Small Tree Filter*/}
            <filter id="filter0_d_0_1" x="1187.62" y="871" width="54.7654" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>

            {/*Medium Tree Filter*/}
            <filter id="filter1_d_0_1" x="1255.7" y="802" width="94.6025" height="142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>

            {/*Large Tree Filter*/}
            <filter id="filter2_d_0_1" x="1359.99" y="697" width="150.028" height="239" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            
            {/*Background Gradient*/}
            <linearGradient id="paint0_linear_0_1" x1="1043.5" y1="1022" x2="1048" y2="347" gradientUnits="userSpaceOnUse">
              <stop stop-color="#61D9FF"/>
              <stop offset="1" stop-color="#61D9FF" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
    )
}