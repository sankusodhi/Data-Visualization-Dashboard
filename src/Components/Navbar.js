import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#2C3E50] text-white px-6 py-4 shadow-lg relative">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button
                    className="text-white md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                <ul
                    className={`md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-[#2C3E50] transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-60' : 'max-h-0'
                    } md:max-h-full`}
                >
                    <li className="border-b md:border-none">
                        <a
                            href="#bar-chart"
                            className="block px-4 py-2 md:inline hover:text-[#FFD700] transition-colors"
                        >
                            Bar Chart
                        </a>
                    </li>
                    <li className="border-b md:border-none">
                        <a
                            href="#line-chart"
                            className="block px-4 py-2 md:inline hover:text-[#FFD700] transition-colors"
                        >
                            Line Chart
                        </a>
                    </li>
                    <li>
                        <a
                            href="#filters"
                            className="block px-4 py-2 md:inline hover:text-[#FFD700] transition-colors"
                        >
                            Filters
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
