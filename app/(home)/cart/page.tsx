"use client"

import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Trash, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { removeProductFromCart } from '@/slices/cartSlice'

const page = () => {

    const cartItems = useAppSelector((state) => state.cart.cartItems)
    console.log(cartItems);
    const dispatch = useAppDispatch()
    const handleRemove = (itemId: number) => {
        dispatch(
            removeProductFromCart(itemId)
        )
        localStorage.setItem("cartItem", JSON.stringify(cartItems.filter(item => item.id !== itemId)));
    }

  return (

    <div className='m-4 p-4'>
        <div className='flex gap-3'>
            <Button asChild variant={"ghost"} size={"icon"}>
                <Link href="/shop">
                    <ChevronLeft />
                </Link>
            </Button>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Cart Items ({cartItems.length})
            </h2>
        </div>
        {cartItems.length > 0 ? (
            <div className='space-y-3 divide-y-4 divide-gray-300'>
            {cartItems.map((cartItem) => {
                return (
                    <div key={cartItem.id} className='w-80 h-auto border py-2 flex flex-col justify-between'>
                        <div className='flex'>
                            <Image
                                src={cartItem.image || "/vitC.webp"}
                                alt="vitamn"
                                width={250}
                                height={250}
                                className='size-20 px-2 py-2'  
                            />
                            <div className='py-2'>
                                <h3 className='text-sml font-bold text-primary'>{cartItem.title}</h3>
                                <p className='pb-4 font-semibold'>$ {cartItem.price}</p>
                            </div>
                        </div>
                        <Button 
                            size={"icon"} 
                            className='ml-2'
                            onClick={() =>handleRemove(cartItem.id)}
                        >
                            <Trash2 />
                        </Button>
                    </div>
                )
            })}
        </div>
        ) : (
            <div className='text-center'>
                <h3>Cart is empty</h3>
            </div>
        )}
        
    </div>

  )
}

export default page