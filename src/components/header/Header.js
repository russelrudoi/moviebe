import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '../../resources/img/icon/Logo.png';
import './header.scss'
import '../../style/style.scss'

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [hideNav, setHideNav] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    if (pathname !== '/moviebe/') {
        return (
            <HeaderPopDown headerClass={'header header-fixed'} />
        )
    }

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

    const handlerBurger = (e) => {
        e.classList.toggle("header__burger_active");
        setShowModal(!showModal)
    }

    const modalClass = classNames('modal', {
        'modal_active': showModal
    })

    const burgerClass = classNames('header__burger', {
        'header__burger_active': showModal
    })

    const headerClass = classNames('header', {
        'header-hide': !showNav,
        'header-fixed': showNav,
        'header-unfixed': hideNav
    })

    return (
        <>
            <header className='header'>
                <div className="container inner__wrapper">
                    <Link to="/moviebe/" >
                        <img className='logo' src={Logo} alt="Logo" />
                    </Link>
                    <nav className='header__nav'>
                        <ul className='header__nav__list'>
                            <li>
                                <Link to='/moviebe/movies'>MOVIES</Link>
                            </li>
                            <li>
                                <Link to='/moviebe/series'>SERIES</Link>
                            </li>
                            <li>
                                <Link to='/moviebe/intheaters'>IN THEATERS</Link>
                            </li>
                            <li>
                                <Link to='/moviebe/comingsoon'>COMING SOON</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={`${burgerClass}`} onClick={(e) => handlerBurger(e.target)}></div>
                </div>
            </header>
            <HeaderPopDown
                headerClass={headerClass}
                burgerClass={burgerClass}
                handlerBurger={handlerBurger} />
            <div className={`${modalClass}`}>
                <nav className='modal__nav'>
                    <ul className='modal__nav__list'>
                        <li>
                            <Link to='/moviebe/movies'>MOVIES</Link>
                        </li>
                        <li>
                            <Link to='/moviebe/series'>SERIES</Link>
                        </li>
                        <li>
                            <Link to='/moviebe/intheaters'>IN THEATERS</Link>
                        </li>
                        <li>
                            <Link to='/moviebe/comingsoon'>COMING SOON</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

const HeaderPopDown = ({ headerClass, burgerClass, handlerBurger }) => {
    return (
        <header className={`${headerClass}`}>
            <div className="container inner__wrapper">
                <Link to="/moviebe/" >
                    <img className='logo' src={Logo} alt="Logo" />
                </Link>
                <nav className='header__nav'>
                    <ul className='header__nav__list'>
                        <li>
                            <NavLink to='/moviebe/movies'>MOVIES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/moviebe/series'>SERIES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/moviebe/intheaters'>IN THEATERS</NavLink>
                        </li>
                        <li>
                            <NavLink to='/moviebe/comingsoon'>COMING SOON</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={`${burgerClass}`} onClick={(e) => handlerBurger(e.target)}></div>
            </div>
        </header>
    )
}

export default Header