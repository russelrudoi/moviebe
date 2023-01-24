import Logo from '../../resources/img/Logo.png';
import Person from '../../resources/img/person.jpg';
import { useEffect } from 'react';
import classNames from 'classnames';

import './header.scss'
import '../../style/style.scss'
import { useState } from 'react';

const Header = () => {

    const [showNav, setShowNav] = useState(false);
    const [hideNav, setHideNav] = useState(false);

    useEffect(() => {
        const eventScroll = () => {
            changeShowNav();
        }

        window.addEventListener('scroll', eventScroll)

        return () => {
            window.removeEventListener('scroll', eventScroll)
        }
    }, [])


    function changeShowNav() {

        if (window.pageYOffset > 700) {
            setShowNav(true)
        } else if (window.pageYOffset < 100) {
            setShowNav(false)
        }

        if (window.pageYOffset > 90 && window.pageYOffset < 550) {
            setHideNav(true)
        } else {
            setHideNav(false)
        }

    }

    const headerClass = classNames('header', {
        'header-hide': !showNav,
        'header-fixed': showNav,
        'header-unfixed': hideNav
    })

    return (
        <>
            <header className='header'>
                <div className="container inner__wrapper">
                    <a href="#" >
                        <img className='logo' src={Logo} alt="Logo" />
                    </a>
                </div>
            </header>
            <header className={`${headerClass}`}>
                <div className="container inner__wrapper">
                    <a href="#" >
                        <img className='logo' src={Logo} alt="Logo" />
                    </a>
                    <nav className='header__nav'>
                        <ul className='header__nav__list'>
                            <li>MOVIES</li>
                            <li>SERIES</li>
                            <li>IN THEATERS</li>
                            <li>COMING SOON</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header