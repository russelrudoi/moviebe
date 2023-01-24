import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplateList from '../templateList/TemplateList';

import { fetchMovies } from './moviesSlice';

const Movies = () => {
    const { movies } = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])

    return (
        <>
            <TemplateList data={movies} title={'Movies'}/>
        </>
    )
}

export default Movies;