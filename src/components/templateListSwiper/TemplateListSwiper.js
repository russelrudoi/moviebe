import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Mousewheel, Lazy } from "swiper";
import TemplateListItem from '../templateListItem/TemplateListItem';
import Spinner from '../spinner/Spinner';
import ErrorIcon from '../../resources/img/icon/error.png';

import "swiper/css";
import './templateListSwiper.scss';

const TemplateListSwiper = ({ data, title, loadingStatus, linkPage, withoutLink }) => {

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
    } else if (data.length === 0) {
        return (
            <div className="template-swiper">
                <h2 className="title">
                    {title}
                </h2>
                <div className="error">
                    <img src={ErrorIcon} alt="" />
                    <div>The maximum number of requests</div>
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
                modules={[Navigation, Mousewheel, Keyboard, Lazy]}
                lazy={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={2}
                spaceBetween={5}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                breakpoints={{
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    991: {
                        slidesPerView: 5,
                        spaceBetween: 15,

                    },
                    1140: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                }}
                className="mySwiper">
                {elements}
            </Swiper>
        </div>
    )
}

export default TemplateListSwiper