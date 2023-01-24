import Logo from '../../resources/img/Logo.png';

import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <img src={Logo} alt="Logo"/>
                    <div className="footer__info">
                        <a href='#'>About us</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer