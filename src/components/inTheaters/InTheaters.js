import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchInTheaters } from './inTheatersSlice';
import InTheatersList from '../inTheatersList/InTheatersList';
import TemplatePageList from "../templatePageList/TemplatePageList";

const InTheaters = () => {
    const { pathname } = useLocation();
    const { inTheaters, inTheatersLoadingStatus } = useSelector(state => state.inTheaters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInTheaters());
    }, [])

    if (pathname === '/') {
        return <InTheatersList
            inTheaters={inTheaters}
            inTheatersLoadingStatus={inTheatersLoadingStatus}
        />
    }

    if (pathname === '/intheaters') {
        return <TemplatePageList items={inTheaters} inTheatersLoadingStatus={inTheatersLoadingStatus} />
    }
}

export default InTheaters