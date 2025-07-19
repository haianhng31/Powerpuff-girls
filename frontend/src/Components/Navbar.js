import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl text-gray-800">
            <Link to='/Home'>Powerpuff</Link>
        </div>
        <div className="flex gap-6 text-md text-gray-600">
            <Link to='/HealthTab' className="hover:text-pink-600 transition duration-200">Health</Link>
            <Link to='/TravelTab'className="hover:text-pink-600 transition duration-200">Travel</Link>
        </div>
    </nav>
    );
};

export default Navbar;