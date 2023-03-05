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

    if (pathname !== '/') {
        return (
            <>
                <HeaderPopDown
                    headerClass={'header header-fixed'}
                    burgerClass={burgerClass}
                    handlerBurger={handlerBurger} />
                <Modal modalClass={modalClass} />
            </>
        )
    }

    return (
        <>
            <header className='header'>
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
                                <Link to='/intheaters'>IN THEATERS</Link>
                            </li>
                            <li>
                                <Link to='/comingsoon'>COMING SOON</Link>
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
            <Modal modalClass={modalClass} />
        </>
    )
}

const HeaderPopDown = ({ headerClass, burgerClass, handlerBurger }) => {
    return (
        <header className={`${headerClass}`}>
            <div className="container inner__wrapper">
                <Link to="/" >
                    <img className='logo' src={Logo} alt="Logo" />
                </Link>
                <nav className='header__nav'>
                    <ul className='header__nav__list'>
                        <li>
                            <NavLink to='/movies'>MOVIES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/series'>SERIES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/intheaters'>IN THEATERS</NavLink>
                        </li>
                        <li>
                            <NavLink to='/comingsoon'>COMING SOON</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={`${burgerClass}`} onClick={(e) => handlerBurger(e.target)}></div>
            </div>
        </header>
    )
}

const Modal = ({ modalClass }) => {
    return (
        <div className={`${modalClass}`}>
            <nav className='modal__nav'>
                <ul className='modal__nav__list'>
                    <li>
                        <Link to='/movies'>MOVIES</Link>
                    </li>
                    <li>
                        <Link to='/series'>SERIES</Link>
                    </li>
                    <li>
                        <Link to='/intheaters'>IN THEATERS</Link>
                    </li>
                    <li>
                        <Link to='/comingsoon'>COMING SOON</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header