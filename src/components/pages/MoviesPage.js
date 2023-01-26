import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../movies/moviesSlice";

import TemplatePageList from "../templatePageList/TemplatePageList"

const MoviesPage = () => {
    const { movies } = useSelector(state => state.movies)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMovies());
    }, [])
    
    return <TemplatePageList data={movies} title={'Movies'}/>
}

export default MoviesPage;