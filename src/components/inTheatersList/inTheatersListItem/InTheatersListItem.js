import { useState } from 'react';
import classNames from "classnames";
import changeUrlImage from "../../../utils/changeUrlImage";
import Spinner from "../../spinner/Spinner";

import './inTheatersListItem.scss'
import { Link } from 'react-router-dom';

const InTheatersListItem = ({ id, title, year, plot, image, imDbRating, metacriticRating, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true)
    };

    const imageClass = classNames({
        'in-theaters__image_loading': !imageLoaded
    })

    const itemSizeClass = classNames(
        'in-theaters__item',
        { 'in-theaters__big': index === 0 },
        { 'in-theaters__small': index === 1 },
        { 'in-theaters__small second': index === 2 }
    )

    const changedImage = changeUrlImage(image)

    return (
        <div className={itemSizeClass}>
            <img
                className={`${imageClass}`}
                src={changedImage}
                alt="in theaters"
                onLoad={handleImageLoaded} />
            {
                !imageLoaded
                    ? <Spinner />
                    : null
            }
            <div className="in-theaters__info">
                <h2 className="in-theaters__title">{title}</h2>
                <div className="in-theaters__year">{year}</div>
                <p className="in-theaters__plot">{plot}</p>
                <div className="in-theaters__ratings">
                    <div className="in-theaters__ratings-name">
                        IMDB:<span>{imDbRating}</span>
                    </div>
                    <div className="in-theaters__ratings-name">
                        MC:<span>{metacriticRating}</span>
                    </div>
                </div>
            </div>
            <Link to={`/moviebe/${id}`}>
                <button className="btn in-theaters__btn-watch">
                    watch
                </button>
            </Link>
        </div>

    )
}

export default InTheatersListItem