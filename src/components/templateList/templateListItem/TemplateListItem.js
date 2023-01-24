import changeUrlImage from '../../../utils/changeUrlImage'
import './templateListItem.scss'

const TemplateListItem = ({ title, year, image }) => {
    const changedImage = changeUrlImage(image)

    return (
        <>
            <img src={changedImage} alt="" className='template__image' />
            <h2 className="template__title">{title}</h2>
            <div className="template__year">({year})</div>
        </>
    )
}

export default TemplateListItem;