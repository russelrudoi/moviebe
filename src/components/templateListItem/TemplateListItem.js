import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import changeUrlImage from '../../utils/changeUrlImage';
import Spinner from "../spinner/Spinner";

import 'swiper/css/lazy';
import './templateListItem.scss'

const TemplateListItem = ({ title, year, image, id, imDbRating }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [widthViewport, setWidthViewport] = useState(0);
    const { pathname } = useLocation()
    const changedImage = changeUrlImage(image);

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [])

    const resizeHandler = () => {
        setWidthViewport(window.innerWidth);
    };

    const handleImageLoaded = () => {
        setImageLoaded(true)
    };

    const imageClass = classNames({
        'template__image_loading': !imageLoaded
    })

    if (pathname === '/' || pathname === `/${id}`) {
        return (
            <Link to={`/${id}`}>
                <div className='template__image' >
                    <img
                        className='swiper-lazy'
                        data-srcset={changedImage}
                        loading='lazy'
                        alt='' />
                    <div className='template__image__overlay'>
                        <button className='template__image__btn'>watch</button>
                        <span>
                            <div className="template__image__rating">IMDB: <span>{imDbRating}</span></div>
                        </span>
                    </div>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>

                <h2 className="template__title">{title}</h2>
                <div className="template__year">{year}</div>
            </Link>
        )
    } else {
        return (
            <Link to={`/${id}`}>
                <div className='template__image'>
                    <img className={`${imageClass}`} src={changedImage} alt="movies" onLoad={handleImageLoaded} />
                    <div className='template__image__overlay'>
                        <button className='template__image__btn'>watch</button>
                        <span>
                            <div className="template__image__rating">IMDB: <span>{imDbRating}</span></div>
                        </span>
                    </div>
                    {
                        !imageLoaded
                            ? <Spinner />
                            : null
                    }
                </div>

                <h2 className="template__title">{title}</h2>
                <div className="template__year">{year}</div>
            </Link>
        )
    }
}

export default TemplateListItem;