import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(() => {
        
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
     
    }, [])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title  text1={'BEST'} text2={'SELLERS'} />
            <p className='w-full m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our best sellers! Shop the most popular styles loved by our customers and elevate your wardrobe with top-rated favorites.</p>

        </div>
    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((item,index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }

        </div>
    </div>
  )
}

export default BestSeller