import TemplateListItem from '../templateListItem/TemplateListItem';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Mousewheel } from "swiper";
import Spinner from '../spinner/Spinner';
import ErrorIcon from '../../resources/img/icon/error.png';

import "swiper/css";
import './templateListSwiper.scss';

const TemplateListSwiper = ({ data, title, loadingStatus, linkPage }) => {

    if (loadingStatus === 'loading') {
        return (
            <div className="template-swiper">
                <div className="container">
                    <h2 className="title">
                        {title}
                    </h2>
                    <div className="spinner">
                        <Spinner />
                    </div>
                </div>
            </div>
        )
    } else if (loadingStatus === 'error') {
        return (
            <div className="template-swiper">
                <div className="container">
                    <h2 className="title">
                        {title}
                    </h2>
                    <div className="eror">
                        <img src={ErrorIcon} alt="" />
                    </div>
                </div>
            </div>
        )
    }

    const renderTemplateList = (arr) => {
        return arr.map(({ id, ...props }, index) => {
            if (index <= 30) {
                return (
                    <SwiperSlide className="template__item" key={id}>
                        <TemplateListItem {...props} id={id}/>
                    </SwiperSlide>
                )
            }
        })
    }

    const elements = renderTemplateList(data)

    return (
        <div className="template-swiper">
            <div className="container">
                <h2 className="title">
                    {title} <Link to={linkPage}>see more...</Link>
                </h2>
                <Swiper
                    modules={[Navigation, Mousewheel, Keyboard]}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={6}
                    spaceBetween={15}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    className="mySwiper">
                    {elements}
                </Swiper>
            </div>
        </div>
    )
}

export default TemplateListSwiper