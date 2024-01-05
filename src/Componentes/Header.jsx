import logo from '../assets/images/logo.svg';
import icon from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';




function Header() {
    return (
        <header className='flex items-center justify-between bg-white px-10 py-5'>
        <div className='flex items-center px-20'>
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
        </div>
        <div className='inline-flex px-20'>
            <img src={icon} alt="Carrito" className='h-5 w-5 mx-5 my-2' />
            <img src={avatar} alt="Avatar" className='w-10 h-10 ml-2' />
        </div>
    </header>
    
    );
}

export default Header;