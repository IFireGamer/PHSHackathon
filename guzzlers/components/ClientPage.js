import React, { useState } from 'react';
import HUD from './HUD'
import smTree from './smTree'
import mdTree from './mdTree'
import lgTree from './lgTree'

export default function ClientPage(){
    return(
        <div>
            <svg className='w-full h-full bg-grassgreen' viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">``
                <rect x="1.5" width="1920" height="1080" fill="#61D9FF"/>
                <path d="M1005.97 186.909C556.948 428.509 149.231 392.909 1.5 344.909V634.909H1921.5V40.4085C1803.42 -11.4248 1454.99 -54.6915 1005.97 186.909Z" fill="#43F464"/>
                <path d="M1021.5 446C824.3 586 273.167 571.667 0 544V1085H1918V363C1716.17 334.333 1247 285.909 1021.5 446Z" fill="#1FDA80"/>
                <smTree />
                <HUD />
            </svg>
            
        </div>
    )
}