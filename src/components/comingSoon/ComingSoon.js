import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import TemplateListSwiper from "../templateListSwiper/TemplateListSwiper"
import TemplatePageList from "../templatePageList/TemplatePageList";
import { fetchComingSoon } from "./comingSoonSlice";


const ComingSoon = () => {
    const { pathname } = useLocation()
    const { comingSoon, comingSoonLoadingStatus } = useSelector(state => state.comingSoon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComingSoon())
    }, [])

    if (pathname === '/') {
        return <TemplateListSwiper
            data={comingSoon}
            title={'Coming Soon'}
            loadingStatus={comingSoonLoadingStatus}
            linkPage={'/comingsoon'} />
    }

    if (pathname === '/comingsoon') {
        return <TemplatePageList items={comingSoon} loadingStatus={comingSoonLoadingStatus} />
    }
}

export default ComingSoon