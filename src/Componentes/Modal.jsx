import Producto from '../assets/images/image-product-1.jpg'
import Producto1 from '../assets/images/image-product-1-thumbnail.jpg'
import Producto2 from '../assets/images/image-product-2-thumbnail.jpg'
import Producto3 from '../assets/images/image-product-3-thumbnail.jpg'
import Producto4 from '../assets/images/image-product-4-thumbnail.jpg'
import Shoes1 from '../assets/images/image-product-1.jpg'
import Shoes2 from '../assets/images/image-product-2.jpg'
import Shoes3 from '../assets/images/image-product-3.jpg'
import Shoes4 from '../assets/images/image-product-4.jpg'
import Icon from '../assets/images/icon-close.svg'

import React from 'react'
import Modal from 'react-modal';

function Img() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className='flex flex-wrap sm:flex items-center justify-center py-9 '>
            <figure className='flex w-full sm:w-72 '>
                <img src={Producto} onClick={openModal} alt="Product" className=' rounded-md w-full sm:w-80 h-72  transition-opacity hover:opacity-75' />
            </figure>

            <div className='hidden lg:flex py-5 gap-x-5'>
                <figure className='flex'>
                    <img src={Producto1} alt="Product-1" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                </figure>

                <figure className='flex'>
                    <img src={Producto2} alt="Product" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                </figure>

                <figure className='flex'>
                    <img src={Producto3} alt="Product" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                </figure>

                <figure className='flex'>
                    <img src={Producto4} alt="Product" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                </figure>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className='flex items-center  justify-center my-20 px-10 py-10'
            >


                <div className='flex flex-wrap items-center'>

                    <div className="w-72 h-80 carousel rounded-lg">
                        <img src={Icon} onClick={closeModal} className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                        <div className="carousel-item w-full">
                            <img src={Shoes1} alt="Product" className="w-full rounded-md" />
                        </div>
                        <div></div>
                        <div className="carousel-item w-full">
                            <img src={Shoes2} alt="Product" className="w-full" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src={Shoes3} alt="Product" className="w-full" />
                        </div>
                        <div className="carousel-item w-full">
                            <img src={Shoes4} alt="Product" className="w-full" />
                        </div>
                    </div>

                    <div className='lg:w-full lg:flex lg:py-5 lg:gap-x-5 '>
                        <figure className='flex'>
                            <img src={Producto1} alt="Product-1" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                        </figure>

                        <figure className='flex'>
                            <img src={Producto2} alt="Product" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                        </figure>

                        <figure className='flex'>
                            <img src={Producto3} alt="Product" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                        </figure>

                        <figure className='flex'>
                            <img src={Producto4} alt="Product" className='rounded-md w-14 h-14 transition-opacity hover:opacity-75' />
                        </figure>
                    </div>
                </div>
            </Modal>
        </div >


    );
}

export default Img;
