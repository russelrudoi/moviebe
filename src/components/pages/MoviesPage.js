import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../movies/moviesSlice";
import Spinner from "../spinner/Spinner";

import TemplatePageList from "../templatePageList/TemplatePageList"

const MoviesPage = () => {
    const { movies, moviesLoadingStatus } = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])
    
    if (moviesLoadingStatus === 'loading') {
        return (
            <div className="spinner-page">
                <Spinner />
            </div>
        )
    }

    return <TemplatePageList items={movies} title={'Movies'} />
}

export default MoviesPage;