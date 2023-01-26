import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import TemplateListSwiper from "../templateListSwiper/TemplateListSwiper"
import { fetchSeries } from "./seriesSlice";

const Series = () => {
    const { series } = useSelector(state => state.series);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeries())
    }, [])

    return (
        <TemplateListSwiper data={series} title={'Series'}/>
    )
}

export default Series;