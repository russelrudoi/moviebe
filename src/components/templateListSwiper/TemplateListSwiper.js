import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Mousewheel } from "swiper";
import TemplateListItem from '../templateListItem/TemplateListItem';
import Spinner from '../spinner/Spinner';
import ErrorIcon from '../../resources/img/icon/error.png';

import "swiper/css";
import './templateListSwiper.scss';

const TemplateListSwiper = ({ data, title, loadingStatus, linkPage, withoutLink }) => {

    const [widthViewport, setWidthViewport] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(6);
    const [spaceBetweenSlides, setSpaceBetweenSlides] = useState(15);

    useEffect(() => {
        setWidthViewport(widthViewport => widthViewport = window.innerWidth);
        handlerViewport()
    }, [])

    const handlerViewport = () => {
        console.log(widthViewport)
        if (widthViewport <= 576) {
            setSlidesPerView(2)
            setSpaceBetweenSlides(5)
            return
        }
        if (widthViewport <= 768) {
            setSlidesPerView(3)
            setSpaceBetweenSlides(5)
            return
        }
        if (widthViewport <= 991) {
            setSlidesPerView(4)
            return
        }

        if (widthViewport <= 1140) {
            setSlidesPerView(5)
            return
        }


    }

    if (loadingStatus === 'loading') {
        return (
            <div className="template-swiper">
                <h2 className="title">
                    {title}
                </h2>
                <div className="spinner">
                    <Spinner />
                </div>
            </div>
        )
    } else if (loadingStatus === 'error') {
        return (
            <div className="template-swiper">
                <h2 className="title">
                    {title}
                </h2>
                <div className="eror">
                    <img src={ErrorIcon} alt="" />
                </div>
            </div>
        )
    }

    const renderTemplateList = (arr) => {
        return arr.map(({ id, ...props }, index) => {
            if (index <= 30) {
                return (
                    <SwiperSlide className="template__item" key={id}>
                        <TemplateListItem {...props} id={id} />
                    </SwiperSlide>
                )
            }
        })
    }

    const elements = renderTemplateList(data)

    return (
        <div className="template-swiper">
            {withoutLink ?
                <h2 className="title">
                    {title}
                </h2>
                :
                <h2 className="title">
                    {title} <Link to={linkPage}>see more...</Link>
                </h2>
            }
            <Swiper
                modules={[Navigation, Mousewheel, Keyboard]}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetweenSlides}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                className="mySwiper">
                {elements}
            </Swiper>
        </div>
    )
}

export default TemplateListSwiper