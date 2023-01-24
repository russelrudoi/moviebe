import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    series: [],
    seriesLoadingStatus: 'idle'
}

export const fetchSeries = createAsyncThunk(
    'series/fetchSeries',
    async () => {
        const { request } = useHttp();
        return await request('https://imdb-api.com/en/API/Top250TVs/k_dhsgy58w')
    }
)

const seriesSlice = createSlice({
    name: 'series',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(fetchSeries.pending, state => { state.seriesLoadingStatus = 'loading' })
            .addCase(fetchSeries.fulfilled, (state, action) => {
                state.series = action.payload.items;
                state.seriesLoadingStatus = 'idle';
            })
            .addCase(fetchSeries.rejected, state => {
                state.seriesLoadingStatus = 'error'
            })
            .addDefaultCase(() => { })
    }
})

const { reducer } = seriesSlice;

export default reducer;