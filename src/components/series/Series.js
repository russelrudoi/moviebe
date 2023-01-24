import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import TemplateList from "../templateList/TemplateList"
import { fetchSeries } from "./seriesSlice";

const Series = () => {
    const { series } = useSelector(state => state.series);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeries())
    }, [])

    return (
        <TemplateList data={series} title={'Series'}/>
    )
}

export default Series;