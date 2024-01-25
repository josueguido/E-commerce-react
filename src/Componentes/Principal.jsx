
import Cart from '../assets/images/icon-cart.svg'
import { useState } from 'react';
import Img from './Modal'
import { v4 as uuidv4 } from 'uuid';
import Carrito from './Carrito';



function Principal() {
    const [count, setCount] = useState(1);
    const [carrito, setCarrito] = useState([]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        const productDetails = {
            count: count,
            id: uuidv4(),
            name: 'Fall Limited Edition Sneakers',
            price: 125.00,
            total: count * 125.00,
        };
    
        console.log('Producto agregado al carrito:', productDetails);
    
        // Actualizar el estado del carrito
        setCarrito((prevCarrito) => [...prevCarrito, productDetails]);

        console.log('Estado del carrito después de la actualización:', carrito);
    };


    return (
        <section className='flex flex-col py-6 px-40 bg-white lg:flex-row lg:w-full h-full   '>
            <Img />
            <div className='flex flex-col sm:grid col-span-4 font-sans py-10  my-5 mx-5 px-5  text-star'>
                <h1 className='text-orange-400 uppercase text-sm font-bold'>
                    Sneaker Company
                </h1>
                <p className='text-black font-bold text-sm  lg:text-3xl'>
                    Fall Limited Edition Sneakers
                </p>
                <p className=' text-gray-500 text-base lg:text-base text-balance'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className='flex flex-wrap lg:grid items-center col-auto lg:my-1 my-2 justify-between lg:justify-start'>
                    <p className='mr-2'>
                        <span className='font-bold text-base text-black'>$125.00</span>
                        <span className='inline-flex items-center bg-orange-300 w-12 h-10 px-2 rounded-md ml-2'>
                            <span className=' font-sans text-orange-500 text-lg'>50%</span>
                        </span>
                    </p>
                    <h3 className='text-gray-500 relative'>
                        <span className='line-through'>$250.00</span>
                    </h3>
                </div>

                <section className='flex flex-col lg:flex-row'>
                    <div className="w-full h-10 lg:w-32 lg:h-10 px-3 py-2 lg:my-2 flex items-center bg-gray-200 rounded-lg">
                        <button onClick={handleDecrement} className="text-orange-400 w-1/3 md:w-full py-2">
                            -
                        </button>
                        <span className='text-black w-1/3 md:w-full text-center'>{count}</span>
                        <button onClick={handleIncrement} className="text-orange-400 w-1/3 md:w-full py-2">
                            +
                        </button>
                    </div>
                    <button onClick={handleAddToCart} className='h-10 lg:h-10 lg:px-10 lg:py-3 px-3 py-5 my-5 lg:my-2 lg:mx-5 flex rounded-md items-center bg-orange-500 hover:bg-orange-300'>
                        <img src={Cart} className='px-5' alt='Cart' />
                        <p className='flex px-10 lg:px-5 text-center text-white font-sans text-sm'>
                            Add to cart (${count * 125.00}) {/* Muestra el precio total */}

                        </p>
                    </button>
                    <Carrito carrito={carrito} />  {/* Pasa el estado del carrito como prop al componente Carrito */}

                </section>
            </div>
        </section>
    )
};

export default Principal;

