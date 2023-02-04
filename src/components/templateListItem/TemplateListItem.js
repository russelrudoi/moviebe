import { useState } from 'react';
import classNames from 'classnames';
import changeUrlImage from '../../utils/changeUrlImage'
import Spinner from "../spinner/Spinner";

import './templateListItem.scss'

const TemplateListItem = ({ title, year, image }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const changedImage = changeUrlImage(image)

    const handleImageLoaded = () => {
        setImageLoaded(true)
    };

    const imageClass = classNames({
        'template__image_loading': !imageLoaded
    })

    return (
        <>
            <div className='template__image'>
                <img className={`${imageClass}`} src={changedImage} alt="movies" onLoad={handleImageLoaded} />
                {
                    !imageLoaded
                        ? <Spinner />
                        : null
                }
            </div>
            <h2 className="template__title">{title}</h2>
            <div className="template__year">({year})</div>
        </>
    )
}

export default TemplateListItem;