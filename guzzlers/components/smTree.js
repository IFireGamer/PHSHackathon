import React, { useState } from 'react';

export default function smTree(){
    return(
        <svg>
            <g filter="url(#filter0_d_0_1)">
                <rect x="1207.96" y="895.8" width="14.087" height="37.2" fill="#897065"/>
                <path d="M1215 871L1238.38 913.75H1191.62L1215 871Z" fill="#43F464"/>
            </g>
                <def>
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
            </def>
        </svg>
    )
}