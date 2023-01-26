import changeUrlImage from '../../utils/changeUrlImage'
import './templateListItem.scss'

import img from '../../resources/img/ex.jpg'

const TemplateListItem = ({ title, year, image }) => {
    const changedImage = changeUrlImage(image)

    return (
        <>
            <img src={img} alt="" className='template__image' />
            <h2 className="template__title">Matrica</h2>
            <div className="template__year">(2021)</div>
        </>
    )
}

export default TemplateListItem;