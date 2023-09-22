'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function NavbarContent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen((old) => !old);
    };

    return <>
        <div className="md:hidden flex items-center">
            <button
                onClick={toggleNavbar}
                className="text-white focus:outline-none focus:text-white"
            >
                <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex items-center gap-5 pl-6 ml-1 mr-auto`}>
            <Link
                href="/"
                className="md:mt-0 text-white hover:text-gray-300 block md:inline-block md:ml-7"
            >
                Name Prediction
            </Link>
            <Link
                href="/countries"
                className="md:mt-0 text-white hover:text-gray-300 block md:inline-block md:ml-7"
            >
                Countries List
            </Link>
        </div>
    </>
}