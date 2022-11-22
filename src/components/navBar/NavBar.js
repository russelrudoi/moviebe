import {ReactComponent as Search} from '../../resources/img/search.svg'
import {ReactComponent as Ticket} from '../../resources/img/ticket.svg'
import {ReactComponent as Folder} from '../../resources/img/folder.svg'
import {ReactComponent as Favorite} from '../../resources/img/favorite.svg'
import {ReactComponent as Bookmark} from '../../resources/img/bookmark.svg'
import {ReactComponent as Tv} from '../../resources/img/tv.svg'
import {ReactComponent as User} from '../../resources/img/user.svg'
import {ReactComponent as SignOut} from '../../resources/img/sign_out.svg'

import './navbar.scss'

const NavBar = () => {

    return (
        <div className="navbar">
            <div>
                <Search className="navbar__icon" />
            </div>
            <div>
                <Ticket src={Ticket} alt="" className="navbar__icon" />
            </div>
            <div>
                <Folder src={Folder} alt="" className="navbar__icon" />
            </div>
            <div>
                <Favorite src={Favorite} alt="" className="navbar__icon" />
            </div>
            <div>
                <Bookmark src={Bookmark} alt="" className="navbar__icon" />
            </div>
            <div>
                <Tv src={Tv} alt="" className="navbar__icon" />
            </div>
            <div className='user'>
                <User src={User} alt="" className="navbar__icon" />
            </div>
            <div>
                <SignOut src={SignOut} alt="" className="navbar__icon" />
            </div>
        </div>
    )
}

export default NavBar