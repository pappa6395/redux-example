"use client"
import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { decrement, increment } from '@/slices/counterSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


// This component uses the Redux hooks to manage the state.
const Counter = () => {

    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.counter.value)

    const handleIncrement = () => dispatch(increment())
    const handleDecrement = () => dispatch(decrement())

  return (

    <div className='mt-4 max-w-3xl mx-auto flex flex-col justify-center items-center'>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Redux Counter    
        </h2>
        <div className='py-4'>
            <div className='flex gap-6'>
                <button
                    onClick={handleDecrement} 
                    className='border bg-slate-100 size-14 rounded-full'>
                    <Minus className='size-10 ml-2' />
                </button>
                <p className='text-5xl'>{count}</p>
                <button
                    onClick={handleIncrement} 
                    className='border bg-slate-100 size-14 rounded-full'>
                    <Plus className='size-10 ml-2' />
                </button>
            </div>
        </div>
        <Button asChild className='mt-6' >
            <Link href={"/countervalue"}>
                <span className='text-2xl'>View Count</span>
            </Link>
        </Button>
    </div>

  )
}

export default Counter