"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { IProduct } from '@/type/type'
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks'
import { addProductToCart, removeProductFromCart } from '@/slices/cartSlice'
import toast from 'react-hot-toast'

const Product = ({products}: {products: IProduct[]}) => {
   
    const dispatch = useAppDispatch()
    const cartItem = useAppSelector((state) => state.cart.cartItems); // Get cart items from Redux store
    
    //check item if it is in the cart
    const isInCart = (id: number) => cartItem.some((item) => item.id === id)

    const handleAdd = (newItem: IProduct) => {
        dispatch(
            addProductToCart(newItem))
        toast.success("item added successfully")
        localStorage.setItem("cartItem", JSON.stringify([...cartItem, newItem]))
    }
    const handleRemove = (item: IProduct) => {
        dispatch(
            removeProductFromCart(item.id)
        )
        toast.success("item removed successfully")
        localStorage.setItem("cartItem", JSON.stringify(cartItem.filter((item) => item.id!== item.id)))
    }

    

  return (

    <div className='p-4 gap-4 grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto'>
        {products && products.map((item) => {
            const existing = isInCart(item.id)
            return (
                <div key={item.id} className='w-60 h-auto border py-2 flex flex-col justify-between'>
                    <div className=''>
                        <Image
                            src={item.image || "/vitC.webp"}
                            alt="vitamn"
                            width={250}
                            height={250}
                            className='h-[220px] px-2 py-2'  
                        />
                        <div className='py-2'>
                            <h3 className='text-xl font-bold text-primary'>{item.title}</h3>
                            
                        </div>
                    </div>
                    <div>
                    <p className='pb-4'>$ {item.price}</p>
                    {existing ? (
                    <Button 
                        variant={"destructive"}
                        className='border w-full px-4 rounded-full'
                        onClick={() => handleRemove(item)}
                    >
                        <ShoppingBag />
                        Remove from Cart
                    </Button>
                    ) : (
                        <Button 
                        className='border w-full px-4 rounded-full'
                        onClick={() => handleAdd(item)}
                    >
                        <ShoppingBag />
                        Add to Cart
                    </Button>
                    )}
                    </div>
                </div>
            )
        })}
    </div>

  )
}

export default Product
