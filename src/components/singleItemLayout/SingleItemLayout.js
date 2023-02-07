import changeUrlImage from '../../utils/changeUrlImage';
import Fancybox from '../galerieFancyBox/FancyBox';
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

    let changedImage = '';

    if (image) {
        changedImage = changeUrlImage(image)
    }
    console.log(images)

    const renderImagesGalerie = ({ items }) => {
        console.log(items)
        if (items) {
            return items.map(({ image }, index) => {
                const changedImage = changeUrlImage(image);

                if (index < 3) {
                    return (
                        <div className="single-item__galerie__item">
                            <img
                                src={changedImage}
                                alt="Galerie"
                                data-fancybox="gallery"
                                data-src={changedImage} />
                        </div>
                    )
                }

                if (index === 3) {
                    return (
                        <div className="single-item__galerie__item single-item__galerie__item_overlay"
                            data-fancybox="gallery"
                            data-src={changedImage}>
                            <img
                                src={changedImage}
                                alt="Galerie"
                                data-fancybox="gallery"
                                data-src={changedImage} />
                        </div>
                    )
                }

                if (index <= 10) {
                    return (
                        <div className="single-item__galerie__item single-item__galerie__item_hide">
                            <img
                                src={changedImage}
                                alt="Galerie"
                                data-fancybox="gallery"
                                data-src={changedImage} />
                        </div>
                    )
                }
            })
        }
    }

    let imagesGalerie = '';

    if (images) {
        imagesGalerie = renderImagesGalerie(images)
    }

    return (
        <div className='single-item'>
            <div className="container">
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
                        <div><span>Year:</span>{year}</div>
                        <div className="even"><span>Country:</span>{countries}</div>
                        <div><span>Genres:</span>{genres}</div>
                        <div className="even"><span>Awards:</span>{awards}</div>
                        <div><span>Companies:</span>{companies}</div>
                        <div className="even"><span>Directors:</span>{directors}</div>
                        <div><span>Starring:</span>{stars}</div>
                        <div className="even"><span>Runtime:</span>{runtimeStr}</div>
                        <div><span>Budget:</span>{boxOffice ? boxOffice.budget : ''}</div>
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
                    <iframe src={`${trailer ? trailer.linkEmbed : ''}?autoplay=false&width=854`} width="854" height="480" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no"></iframe>
                </div>
                <div className="single-item__similars">
                    {similars ? <TemplateListSwiper data={similars} title={'Similars'} withoutLink={true}/> : null}
                </div>
            </div>
        </div>
    )
}

export default SingleItemLayout