import { useState } from "react"; // 
import logo from "../assets/images/logo.svg";
import Close from "../assets/images/icon-close.svg";
import icon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
        <header className="flex items-center  py-15 px-24  justify-between bg-white">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 py-3">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex">
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded={menuOpen ? "true" : "false"}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>

                        <img
                            src={logo}
                            className="h-8 px-5"
                            alt="Flowbite Logo"
                        />
                    </div>
                    <div
                        className={` md:block md:w-auto fixed left-0 top-5 h-full bg-white w-1/2 overflow-y-auto transform translate-x-0 md:translate-x-full md:h-auto transition-transform duration-300 ease-in-out ${menuOpen ? "" : "hidden"
                            }`}
                        id="navbar-default"
                    >
                        <img
                            src={Close}
                            onClick={closeMenu}
                            className="h-8 my-5 mx-5 lg:hidden"
                            alt="Flowbite Logo"
                        />
                        <ul className="flex flex-col p-10 gap-10 lg:gap-0 md:py-5 mt-4 text-lg  lg:text-sm font-medium  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li className="text-gray-600">Collections</li>
                            <li className="text-gray-600">Men</li>
                            <li className="text-gray-600">Women</li>
                            <li className="text-gray-600">About</li>
                            <li className="text-gray-600">Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="flex">
                <Link to="/Carrito">
                <img
                    src={icon}
                    alt="Carrito"
                    className="h-5 w-5 mx-5 my-2 cursor-pointer"
                />
                </Link>
                <Link to="/Credenciales">
                    <img src={avatar} alt="Avatar" className="w-10 h-10 ml-2" />
                </Link>
            </div>
        </header>
        </>
    );
};

export default Header;
