import TemplateListItem from '../templateListItem/TemplateListItem';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Mousewheel } from "swiper";

import "swiper/css";
import './templateListSwiper.scss';

const TemplateListSwiper = ({data, title}) => {

    const renderTemplateList = (arr) => {
        if (arr.length === 0) {
            return <div>Error loading</div>
        }
        
        return arr.map(({ id, ...props }, index) => {
            if (index <= 30) {
                return (
                    <SwiperSlide className="template__item" key={id}>
                        <TemplateListItem {...props} />
                    </SwiperSlide>
                )
            }
        })
    }
    const elements = renderTemplateList(data)

    return (
        <div>
            <div className="template">
                <div className="container">
                    <h2 className="title">
                        {title}
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
        </div>
    )
}

export default TemplateListSwiper