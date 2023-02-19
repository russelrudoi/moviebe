import { Link } from 'react-router-dom';
import InTheatersListItem from './inTheatersListItem/InTheatersListItem';
import Spinner from "../spinner/Spinner";
import ErrorIcon from '../../resources/img/icon/error.png';

import '../../style/style.scss';
import './inTheatersList.scss';

const InTheatersList = ({ inTheaters, inTheatersLoadingStatus }) => {

    if (inTheatersLoadingStatus === 'loading') {
        return (
            <div className="in-theaters">
                <h2 className="title">In theaters</h2>
                <div className="spinner">
                    <Spinner />
                </div>
            </div>
        )
    } else if (inTheatersLoadingStatus === 'error') {
        return (
            <div className="in-theaters">
                <h2 className="title">In theaters</h2>
                <div className="error">
                    <img src={ErrorIcon} alt="" />
                    Error
                </div>
            </div>
        )
    }

    const renderList = (arr) => {
        let amountMovie = 3;
        
        if (window.innerWidth <= 768) {
            amountMovie = 4
        }
        return arr.map(({ id, ...props }, index) => {
            if (index < amountMovie) {
                return (
                    <InTheatersListItem
                        key={id}
                        index={index}
                        id={id}
                        {...props}
                    />
                )
            } 
        })
    }

    const elements = renderList(inTheaters)

    return (
        <div className="in-theaters">
            <h2 className="title">In theaters <Link to='/moviebe/intheatre'>see more...</Link></h2>
            <div className="in-theaters__wrapper">
                {elements}
                <Link to='/moviebe/intheaters'>
                    <button className="btn in-theaters__btn-link">see more</button>
                </Link>
            </div>
        </div>
    )
}

export default InTheatersList;