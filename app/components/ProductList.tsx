"use client"

import React from 'react'
import Product from './Product'
import { IProduct } from '@/type/type'
import Link from 'next/link'
import { useAppSelector } from '@/store/hooks/hooks'

const ProductList = ({products}: {products: IProduct[]}) => {

    const cartItem = useAppSelector((state) => state.cart.cartItems)

  return (

    <div className='p-4'>
        <div className="flex justify-between">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                Product List ({products.length ?? 0})   
            </h2>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                <Link href="/cart">
                    View Cart ({cartItem.length ?? 0}) 
                </Link>
            </h2>
        </div>
        <div className='py-8'>
            <Product products={products}/>
        </div>
    </div>

  )
}

export default ProductList