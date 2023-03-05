import { useEffect, useState } from 'react';
import Fancybox from '../galerieFancyBox/FancyBox';
import classNames from 'classnames';
import changeUrlImage from '../../utils/changeUrlImage';
import TemplateListSwiper from "../templateListSwiper/TemplateListSwiper";

import './singleItemLayout.scss';

const SingleItemLayout = ({
    title,
    image,
    images,
    year,
    countries,
    genres,
    directors,
    stars,
    runtimeStr,
    awards,
    companies,
    boxOffice,
    imDbRating,
    metacriticRating,
    plot,
    trailer,
    similars }) => {

    const [widthViewport, setWidthViewport] = useState(0);
    const [amountImage, setAmountImage] = useState(3);
    const [widthVideo, setWidthVideo] = useState("854");
    const [heightVideo, setHeightVideo] = useState("480");

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [widthViewport])

    const resizeHandler = () => {
        setWidthViewport(window.innerWidth);
        changeAmountImage()
    };

    const changeAmountImage = () => {
        if (widthViewport > 1240) {
            setWidthVideo("854")
            setHeightVideo("480")
            setAmountImage(3)
            return
        }

        if (widthViewport > 891) {
            setAmountImage(2)
            setWidthVideo("854")
            setHeightVideo("480")
            return
        }
        if (widthViewport > 576) {
            setAmountImage(1)
            setWidthVideo("560")
            setHeightVideo("315")
            return
        } else {
            setWidthVideo("480")
            setHeightVideo("270")
            setAmountImage(0)
        }
    }

    let changedImage = '';

    if (image) {
        changedImage = changeUrlImage(image)
    }

    const isData = (data) => {
        if (data) return data
        else return 'No Data'
    }

    const renderImagesGalerie = ({ items }) => {
        if (items) {
            return items.map(({ image }, index) => {
                if (index <= 10) {
                    const changedImage = changeUrlImage(image);

                    const imageWrapperClass = classNames("single-item__galerie__item", {
                        "single-item__galerie__item_overlay": index === amountImage,
                        "single-item__galerie__item_hide": index > amountImage
                    })

                    return (
                        <div
                            className={`${imageWrapperClass}`}
                            data-fancybox="gallery"
                            data-src={changedImage}
                            key={index}>
                            <img
                                src={changedImage}
                                alt="Galerie" />
                        </div>
                    )
                }
            })
        }
    }

    let imagesGalerie = null;

    if (images) {
        imagesGalerie = renderImagesGalerie(images)
    }

    return (
        <div className='single-item'>
            <h2 className='single-item__title'>{title}</h2>
            <div className="single-item__promo">
                <div className="single-item__promo__thumbnail">
                    <img src={changedImage} alt="thumbnail" />
                    <div className="single-item__promo__ratings">
                        <div>
                            IMDB:<span>{imDbRating}</span>
                        </div>
                        <div>
                            MC:<span>{metacriticRating}</span>
                        </div>
                    </div>
                </div>
                <div className="single-item__promo__descr">
                    <div><span>Year:</span>{isData(year)}</div>
                    <div className="even"><span>Country:</span>{isData(countries)}</div>
                    <div><span>Genres:</span>{isData(genres)}</div>
                    <div className="even"><span>Awards:</span>{isData(awards)}</div>
                    <div><span>Companies:</span>{isData(companies)}</div>
                    <div className="even"><span>Directors:</span>{isData(directors)}</div>
                    <div><span>Starring:</span>{isData(stars)}</div>
                    <div className="even"><span>Runtime:</span>{isData(runtimeStr)}</div>
                    <div><span>Budget:</span>{boxOffice ? isData(boxOffice.budget) : 'No Data'}</div>
                </div>
            </div>
            <div className="single-item__descr">
                <h3>Description</h3>
                {plot}
            </div>
            <div className="single-item__galerie">
                <Fancybox>
                    {imagesGalerie}
                </Fancybox>
            </div>
            <div className="single-item__trailer">
                <iframe src={`${trailer ? trailer.linkEmbed : ''}?autoplay=false&width=${widthVideo}`} width={widthVideo} height={heightVideo} allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no"></iframe>
            </div>
            <div className="single-item__similars">
                {similars ? <TemplateListSwiper data={similars} title={'Similars'} withoutLink={true} /> : null}
            </div>
        </div>
    )
}

export default SingleItemLayout