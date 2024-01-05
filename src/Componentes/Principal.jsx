import Producto from '../assets/images/image-product-1.jpg'
import Producto1 from '../assets/images/image-product-1-thumbnail.jpg'
import Producto2 from '../assets/images/image-product-2-thumbnail.jpg'
import Producto3 from '../assets/images/image-product-3-thumbnail.jpg'
import Producto4 from '../assets/images/image-product-4-thumbnail.jpg'

import Cart from '../assets/images/icon-cart.svg'
import { useState } from 'react';





function Principal() {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };



    return (
        <section className='flex flex-col  py-8 px-44 bg-white lg:flex-row   '>

            <div className='flex flex-wrap sm:flex'>
                <figure className='flex w-full sm:w-72'>
                    <img src={Producto} alt="Product" className=' rounded-md w-full sm:w-72 h-72' />
                </figure>

                <div className='hidden lg:flex py-5 gap-x-5'>
                    <figure className='flex'>
                        <img src={Producto1} alt="Product-1" className='rounded-md w-14 h-14' />
                    </figure>

                    <figure className='flex'>
                        <img src={Producto2} alt="Product" className='rounded-md w-14 h-14' />
                    </figure>

                    <figure className='flex'>
                        <img src={Producto3} alt="Product" className='rounded-md w-14 h-14' />
                    </figure>

                    <figure className='flex'>
                        <img src={Producto4} alt="Product" className='rounded-md w-14 h-14' />
                    </figure>
                </div>
            </div>



            <div className='flex flex-col sm:grid col-span-3 font-sans  my-5 mx-5 px-5 '>
                <h1 className='text-orange-400  uppercase text-sm font-bold'>
                    Sneaker Company
                </h1>
                <p className='text-black font-bold text-4xl'>
                    Fall Limited Edition Sneakers
                </p>
                <p className=' text-gray-500 text-base'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className='grid items-center col-auto my-2'>
                    <p className='mr-2'>
                        <span className='font-bold text-base text-black'>$125.00</span>
                        <span className='inline-flex items-center bg-orange-300 w-12 h-10 px-2 rounded-md ml-2'>
                            <span className=' font-sans text-orange-500 text-lg'>50%</span>
                        </span>
                    </p>
                    <h3 className='text-gray-500'>$250.00</h3>
                </div>





                <section className='flex flex-col lg:flex-row  '>
                    <div className="w-full h-10 lg:w-32  lg:h-10 px-3 py-2 flex items-center bg-gray-200 rounded-lg">
                        <button onClick={handleDecrement} className="text-orange-400 w-1/3 md:w-full py-2">
                            -
                        </button>
                        <span className='text-black w-1/3 md:w-full text-center'>{count}</span>
                        <button onClick={handleIncrement} className="text-orange-400 w-1/3 md:w-full py-2">
                            +
                        </button>
                    </div>
                    <button className='h-10 lg:h-10 lg:px-10 lg:py-3 px-3 py-5 my-5 lg:mx-5 flex rounded-md items-center  bg-orange-500  hover:bg-orange-300'>
                        <img src={Cart} className='px-5' alt='Cart' />
                        <p className='text-white font-sans text-sm'>Add to cart</p>
                    </button>
                </section>


            </div>
        </section>
    );
}


export default Principal;

