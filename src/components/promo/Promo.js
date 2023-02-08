import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import changeUrlImage from '../../utils/changeUrlImage';

import Spinner from "../spinner/Spinner";
import ErrorIcon from '../../resources/img/icon/error.png';

import './promo.scss'

const Promo = () => {
    const { inTheaters: promo, inTheatersLoadingStatus: promoLoadingStatus } = useSelector(state => state.inTheaters);

    if (promoLoadingStatus === 'loading') {
        return (
            <div className="promo">
                <div className="spinner">
                    <Spinner />
                </div>
                <div className="promo__bg"></div>
            </div>
        )
    } else if (promoLoadingStatus === 'error') {
        return (
            <div className="promo">
                <div className="error">
                    <img src={ErrorIcon} alt="" />
                    Error
                </div>
                <div className="promo__bg"></div>
            </div>
        )
    }

    const renderPromo = (arr) => {
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (arr.length) {
            const { id, title, fullTitle, plot, imDbRating, metacriticRating, image } = arr[random(3, arr.length)]

            return (
                <div className="container inner_wrapper">
                    <div className="promo__info">
                        <h1 className="promo__title">{title}</h1>
                        <div className="promo__original-title">{fullTitle}</div>
                        <p className="promo__description">
                            {plot}
                        </p>
                        <div className="promo__ratings">
                            <div className="promo__ratings-name">
                                IMDB:<span>{imDbRating}</span>
                            </div>
                            <div className="promo__ratings-name">
                                MC:<span>{metacriticRating}</span>
                            </div>
                        </div>
                        <Link to={`/moviebe/${id}`}>
                            <button className="btn promo__btn">more details</button>
                        </Link>
                    </div>
                    <div className="promo__img">
                        <img src={changeUrlImage(image)} alt="movies" />
                    </div>
                </div>
            )
        }
    }

    const element = renderPromo(promo)

    return (
        <div className="promo">
            {element}
            <div className="promo__bg"></div>
        </div>
    )
}

export default Promo