import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
        Sign up for our newsletter to stay updated on the newest fashion drops, styling tips, and exclusive offers from our clothing line!
        </p>
        <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 active:bg-gray-700 border-l  transition ease-in-out'>SUBSCRIBE</button>
            

        </form>
      
    </div>
  )
}

export default NewsLetterBox 
