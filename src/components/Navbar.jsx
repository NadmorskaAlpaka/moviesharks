import React from 'react';
import Logo from '../assets/moviesharks.png';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav>
            <div className='nav--wrapper'>
                <figure className='nav__img--wrapper'>
                    <Link to="/">
                        <img className="nav__img" src={Logo} alt="logo"/>
                    </Link>
                </figure>
                <ul className='nav__list'>
                    <li className='nav__list--element click'>
                        <Link 
                            data-title="HOME" 
                            className="nav__link link--hover-effect" 
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav__list--element click'>
                        <Link 
                            data-title="DISCOVER" 
                            className="nav__link link--hover-effect" 
                            to="/discover"
                        >
                            Discover
                        </Link>
                    </li>
                    <li className='nav__list--element click'>
                        <Link 
                            data-title="CONTACT" 
                            className="nav__link link--hover-effect" 
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

