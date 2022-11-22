import Logo from '../../resources/img/Logo.png';
import Person from '../../resources/img/person.jpg'

import './header.scss'
import '../../style/style.scss'

const Header = () => {



    return (
        <header className='mova__header'>
            <div className="container inner_wrapper">
                <img className='logo' src={Logo} alt="Logo" />
                <div className="person">
                    <img className='person__photo' src={Person} alt="Person" />
                    <div>
                        <div className="person__name">Kinoman #294</div>
                        <div className="person__status">Active</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header