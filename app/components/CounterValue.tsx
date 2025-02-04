"use client"

import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'


const CounterValue = () => {
    
    const counter = useSelector((state: RootState) => state.counter.value)
    console.log(counter);
    
  return (

    <div>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {counter}
        </h1>
    </div>

  )
}

export default CounterValue