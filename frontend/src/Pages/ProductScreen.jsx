import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../component/Product'
import Rating from '../component/Rating'

const ProductScreen = () => {
    const { id: ProductId } = useParams()//useparams to get the id
    //console.log(ProductId);
    const product = products.find((p) => p._id === ProductId)//products==>data ,p=>takes all id,callback function


    return (
        <>
            <Link to="/">
                <button className='btn mt-7'>Go Back</button>
            </Link>
            <div className='grid md:grid-cols-2 gap-5 mt-6'>
                <div className='md:grid-cols-6 h-screen'>
                    <img src={`${product.image}`} alt="" />
                </div>


                <div className='md:grid-cols-6 h-screen mt-4'>
                    <div className="card  shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{product.name}</h2>
                            <p>{product.description}</p>
                            <div className='flex items-center'>
                                <Rating value={product.rating} text={product.numReviews}/>
                            </div>
                            <p className='font-bold'> $ {product.price}</p>
                            <p>{product.countInstock > 0 ? "In Stock" : "No stock"} </p>

                            <div className="card-actions">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )

}

export default ProductScreen
// const params = useParams();
// const { id } = params;