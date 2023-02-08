import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import changeUrlImage from '../../utils/changeUrlImage'
import Spinner from "../spinner/Spinner";

import './templateListItem.scss'

const TemplateListItem = ({ title, year, image, id }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const changedImage = changeUrlImage(image)

    const handleImageLoaded = () => {
        setImageLoaded(true)
    };

    const imageClass = classNames({
        'template__image_loading': !imageLoaded
    })

    const handleClick = () => {
        console.log(title, year, id)
    }

    return (
        <Link to={`/moviebe/${id}`} onClick={handleClick}>
            <div className='template__image'>
                <img className={`${imageClass}`} src={changedImage} alt="movies" onLoad={handleImageLoaded} />
                <button className='template__image__btn'>watch</button>
                {
                    !imageLoaded
                        ? <Spinner />
                        : null
                }
                <div className={`template__image_overlay ${imageClass}`}></div>
            </div>

            <h2 className="template__title">{title}</h2>
            <div className="template__year">{year}</div>
        </Link>
    )
}

export default TemplateListItem;