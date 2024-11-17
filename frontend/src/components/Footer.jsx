import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Elevate your wardrobe with our latest updates and offers. Subscribe for insider access!</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>
            COMPANY
        </p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>0309-6770806</li>
            <li>contact@foryou.com</li>
        </ul>
      </div>
    </div>
      <div className='w-full text-center'>
        <hr />
        <p className='py-5 lg:text-sm md:text-sm sm:text-xs text-center '>Copywrite 2024 @ forever.com - All Right Reserved.</p>
      </div>
      </>
  )
}

export default Footer
