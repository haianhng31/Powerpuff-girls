import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
    <nav className='navbar'>
        <div className='navbar-left'>
            Logo will go here for home navigation
        </div>
        <div className='navbar-right'>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <a href='../HealthTab/HealthTab.js'>Health</a>
                </li>
                <li className='navbar-li'>
                    <a href='../TravelTab/TravelTab.js'>Traveling</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;