import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {

    function openMenu() {
        document.body.classList += " openMenu";
    }

    function closeMenu() {
        document.body.classList.remove("openMenu");
    }

    return (
        <>
            <span
                className="material-symbols-outlined mobile-menu__icon--open click"
                onClick={openMenu}
            >
                menu
            </span>
            <div className='mobile-menu--wrapper'>
                <span 
                    className="material-symbols-outlined mobile-menu__icon--close click"
                    onClick={closeMenu}    
                >
                    close
                </span>
                <ul className='mobile-menu__list'>
                    <li className='mobile-menu__list--element click'>
                        <Link
                            className="mobile-menu__link"
                            to="/"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='mobile-menu__list--element click'>
                        <Link
                            className="mobile-menu__link"
                            to="/discover"
                            onClick={closeMenu}
                        >
                            Discover
                        </Link>
                    </li>
                    <li className='mobile-menu__list--element click'>
                        <Link
                            className="mobile-menu__link"
                            to="/contact"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MobileMenu;
