import  { useState } from 'react'; // Import useState
import logo from '../assets/images/logo.svg';
import icon from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import Modal from 'react-modal';

const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='flex items-center px-20 justify-between bg-white '>
            <img src={logo} alt="Logo" className='mr-2 px-5' />
            <nav className="inline-flex py-7 px-10">
                <ul className='flex space-x-4 items-center font-sans font-extralight text-sm'>
                    <li className="text-gray-500">Collections</li>
                    <li className="text-gray-500">Men</li>
                    <li className="text-gray-500">Women</li>
                    <li className="text-gray-500">About</li>
                    <li className="text-gray-500">Contact</li>
                </ul>
            </nav>
            <div className='flex'>
                <img
                    src={icon}
                    alt="Carrito"
                    className='h-5 w-5 mx-5 my-2 cursor-pointer'
                    onClick={openModal}
                />
                <img src={avatar} alt="Avatar" className='w-10 h-10 ml-2' />
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='Modal absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md'
                overlayClassName='Overlay'
            >
                <div className='bg-white text-black'>
                    Contenido del modal
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </div>
    );
};

export default Header;
