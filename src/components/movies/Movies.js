import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplateListSwiper from '../templateListSwiper/TemplateListSwiper';

import { fetchMovies } from './moviesSlice';

const Movies = () => {
    const { movies } = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])

    return (
        <>
            <TemplateListSwiper data={movies} title={'Movies'}/>
        </>
    )
}

export default Movies;