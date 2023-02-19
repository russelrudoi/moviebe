import { Link } from 'react-router-dom';
import Logo from '../../resources/img/icon/Logo.png';

import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__wrapper">
                <Link to="/moviebe/" className='footer__logo'>
                    <img src={Logo} alt="Logo" />
                    <h1>MOVIEBE</h1>
                </Link>
                <div className="footer__info">
                    <a href='#'>About us</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer