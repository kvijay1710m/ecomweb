import React from 'react'
import products from './Product'
import Rating from './Rating'
import { Link } from 'react-router-dom'


const ProductCard = ({ prop }) => {
    return (
        <div>
            <Link to={`product/${prop._id}`}>
            <div className="card glass card-compact bg-base-100 w-full shadow-xl hover:scale-10 transition-all duration-75 flex flex-col">
                <figure className='h-80'>
                    <img className='h-64 w-full object-cover rounded-xl'
                        src={`${prop.image}`}
                        alt="Furniture" />
                </figure>
                <div className="card-body flex flex-col ">
                    <h1 className="card-title text-lg font-semibold mb-1">{prop.name}</h1>
                    <div>
                        <Rating value={prop.rating} text={prop.numReviews}/>
                    </div>
                    <h3 className='card-title'>${prop.price}</h3>
                    <p className="text-sm md:text-base line-clamp-4">
                        {prop.description}
                    </p>
                </div>
            </div>
            </Link>
            

        </div>
    )
}

export default ProductCard