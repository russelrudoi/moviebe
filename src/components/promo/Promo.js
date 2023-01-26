import { useSelector } from 'react-redux';
import changeUrlImage from '../../utils/changeUrlImage';

import '../../style/style.scss'
import './promo.scss'

const Promo = () => {

    const { inTheaters: promo, inTheatersLoadingStatus: promoLoadingStatus } = useSelector(state => state.inTheaters);

    const renderPromo = (arr) => {
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (arr.length === 0) {
            return <div>Loading</div>
        }

        if (arr.length) {
            const { title, fullTitle, plot, imDbRating, metacriticRating, image } = arr[random(3, arr.length)]

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
                        <button className="btn promo__btn">more details</button>
                    </div>
                    <div className="promo__img">
                        <img src={changeUrlImage(image)}></img>
                    </div>
                </div>
            )
        }
    }



    // const { title, fullTitle, plot, imDbRating, metacriticRating } = promo[random(3, promo.length)]
    console.log(promoLoadingStatus)

    const element = renderPromo(promo)

    return (
        <div className="promo">
            {element}
            <div className="promo__bg"></div>
        </div>
    )
}

export default Promo