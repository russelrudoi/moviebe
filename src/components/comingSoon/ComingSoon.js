import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import TemplateListSwiper from "../templateListSwiper/TemplateListSwiper"
import { fetchComingSoon } from "./comingSoonSlice";


const ComingSoon = () => {
    const {comingSoon} = useSelector(state => state.comingSoon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComingSoon())
    }, [])


    return <TemplateListSwiper data={comingSoon} title={'Coming Soon'}/>
}

export default ComingSoon