import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TemplateListSwiper from '../templateListSwiper/TemplateListSwiper';
import TemplatePageList from '../templatePageList/TemplatePageList';

import { fetchMovies } from './moviesSlice';

const Movies = () => {
    const { pathname } = useLocation()
    const { movies, moviesLoadingStatus } = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])

    if (pathname === '/') {
        return <TemplateListSwiper
            data={movies}
            title={'Movies'}
            loadingStatus={moviesLoadingStatus}
            linkPage={'/movies'} />

    }

    if (pathname === '/movies') {
        return <TemplatePageList items={movies} loadingStatus={moviesLoadingStatus} />
    }
}

export default Movies;