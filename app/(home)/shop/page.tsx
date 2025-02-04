import { getAllProducts } from '@/actions/products'
import ProductList from '@/app/components/ProductList'
import React from 'react'

const page = async () => {

    const products = await getAllProducts()

  return (

    <div className='m-4 p-4'>
        <ProductList products={products}/>
    </div>

  )
}

export default page