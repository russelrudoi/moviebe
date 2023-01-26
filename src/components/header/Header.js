import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '../../resources/img/Logo.png';
import './header.scss'
import '../../style/style.scss'

const Header = () => {

    const [showNav, setShowNav] = useState(false);
    const [hideNav, setHideNav] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    function scrollHandler() {

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
                    <Link to="/" >
                        <img className='logo' src={Logo} alt="Logo" />
                    </Link>
                </div>
            </header>
            <header className={`${headerClass}`}>
                <div className="container inner__wrapper">
                    <Link to="/" >
                        <img className='logo' src={Logo} alt="Logo" />
                    </Link>
                    <nav className='header__nav'>
                        <ul className='header__nav__list'>
                            <li>
                                <Link to='/movies'>MOVIES</Link>
                            </li>
                            <li>
                                <Link to='/series'>SERIES</Link>
                            </li>
                            <li>
                                <Link to='/intheatre'>IN THEATRE</Link>
                            </li>
                            <li>
                                <Link to='/comingsoon'>COMING SOON</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header