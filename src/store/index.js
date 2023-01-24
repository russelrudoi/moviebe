import { configureStore} from '@reduxjs/toolkit';
import inTheaters from "../components/inTheatersList/inTheatersSlice";
import comingSoon from '../components/comingSoon/comingSoonSlice';
import movies from "../components/movies/moviesSlice";
import series from "../components/series/seriesSlice";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }

    return next(action)
}

const store = configureStore({
    reducer: {inTheaters, movies, series, comingSoon},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;