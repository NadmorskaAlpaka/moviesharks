import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='footer--wrapper'>
                        <ul className='footer__list'>
                            <li className='footer__list--element click'>
                                <Link to="/" className='footer__link'>
                                    Home
                                </Link>
                            </li>
                            <li className='footer__list--element click'>
                                <Link to="/" className='footer__link'>
                                    Discover
                                </Link>
                            </li>
                            <li className='footer__list--element click'>
                                <Link to="/" className='footer__link'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <span className='copyright'>
                            MovieSharks &copy; 2022
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
