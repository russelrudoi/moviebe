import imgMovie from '../../resources/img/337.png';
import bg from '../../resources/img/bg.jpg';

import './promo.scss'
import '../../style/style.scss'

const Promo = () => {

    return (
        <div className="promo">
            <div className="container inner_wrapper">
                <div className="promo__info">
                    <div className="promo__type">film</div>
                    <h1 className="promo__title">Duna</h1>
                    <div className="promo__original-title">Dune: Part One</div>
                    <p className="promo__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus est ipsam eius quasi fugit necessitatibus.
                    </p>
                    <div className="promo__ratings">IMDB: 8.2</div>
                </div>
                <img className="promo__img" src={imgMovie}></img>
            </div>
            <div className="bg">
                {/* <img src={bg} alt="" className='b' /> */}
            </div>
        </div>
    )
}

export default Promo