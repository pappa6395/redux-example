
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {

  return (

    <div className='px-4'>
        <div className='flex flex-col py-6 justify-center items-center'>
            <div className='p-4'>
                <Link href={"/counter"}>
                    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Redux Lessons</h2>
                </Link>
            </div>
            <ul className='flex flex-col'>
                <li className='pb-4 gap-2 flex flex-col'>
                    <p>Manage State across entire Counter</p>
                    <Button asChild>
                        <Link href={"/counter"}>
                        <span className='block text-2xl'>Counter</span>
                        </Link>
                    </Button>
                </li>
                <li className='pb-4 gap-2 flex flex-col'>
                    <p>Manage State across entire Shop</p>
                    <Button asChild>
                        <Link href={"/shop"}>
                        <span className='block text-2xl'>Shop</span>
                        </Link>
                    </Button>
                </li>
                <li className='flex gap-2 flex-col'>
                    <p>Manage State across entire Form</p>
                    <Button asChild>
                        <Link href={"/form"}>
                        <span className='block text-2xl'>Form</span>
                        </Link>
                    </Button>
                </li>
            </ul>
        </div>
        
    </div>

  )
}

export default page