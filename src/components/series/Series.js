import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { fetchSeries } from "./seriesSlice";

import TemplateListSwiper from "../templateListSwiper/TemplateListSwiper"
import TemplatePageList from "../templatePageList/TemplatePageList";

const Series = () => {
    const { pathname } = useLocation()
    const { series, seriesLoadingStatus } = useSelector(state => state.series);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeries())
    }, [])

    if (pathname === '/moviebe/') {
        return <TemplateListSwiper
            data={series}
            title={'Series'}
            loadingStatus={seriesLoadingStatus}
            linkPage={'/moviebe/series'} />
    }

    if (pathname === '/moviebe/series') {
        return <TemplatePageList items={series} loadingStatus={seriesLoadingStatus} />
    }
}

export default Series;