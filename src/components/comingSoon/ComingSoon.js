import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import TemplateList from "../templateList/TemplateList"
import { fetchComingSoon } from "./comingSoonSlice";


const ComingSoon = () => {
    const {comingSoon} = useSelector(state => state.comingSoon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComingSoon())
    }, [])


    return <TemplateList data={comingSoon} title={'Coming Soon'}/>
}

export default ComingSoon