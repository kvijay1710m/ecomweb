import React, { useEffect, useState } from 'react'
import products from '../component/Product'  //data
import ProductCard from '../component/ProductCard'

const Homescreen = () => {

    return (
        <>
            <h2 className='text-3xl mt-5'>All Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2'>
                {
                    products.map((product) => (
                        <ProductCard prop={product} key={product.id} />
                    ))
                }
            </div>

            
        </>
    )
}

export default Homescreen