import { useEffect, useState } from "react"
import TemplateListItem from "../templateListItem/TemplateListItem"

import './templatePageList.scss'

const TemplatePageList = ({ data, title }) => {
    const [offset, setOffset] = useState(30)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    const scrollHandler = (e) => {
        const heigthDocument = e.target.documentElement.scrollHeight
        if (heigthDocument - (e.target.documentElement.scrollTop + window.innerHeight) < heigthDocument * 0.3) {
            setOffset(offset => offset + 18)
        }
    }

    const renderTemplatePageList = (arr) => {
        if (arr.length === 0) {
            return <div>Error loading</div>
        }

        return arr.map(({ id, ...props }, index) => {
            if (index <= offset) {
                return (
                    <div className="template__item" key={id}>
                        <TemplateListItem {...props} />
                    </div>
                )
            }
        })
    }

    const elements = renderTemplatePageList(data)

    return (
        <div className="template-page">
            <div className="container">
                <h2 className="title">{title}</h2>
                <div className="template-page__wrapper">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default TemplatePageList;