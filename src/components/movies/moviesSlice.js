import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    movies: [],
    moviesLoadingStatus: 'idle'
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const { request } = useHttp();
        return await request('https://imdb-api.com/en/API/Top250Movies/k_dkokc24s')
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(fetchMovies.pending, state => { state.moviesLoadingStatus = 'loading' })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.items;
                state.moviesLoadingStatus = 'idle';
            })
            .addCase(fetchMovies.rejected, state => {
                state.moviesLoadingStatus = 'error'
            })
            .addDefaultCase(() => { })
    }
})

const { reducer } = moviesSlice;
export default reducer