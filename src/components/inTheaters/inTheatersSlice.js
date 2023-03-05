import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    inTheaters: [],
    inTheatersLoadingStatus: 'idle',
}

export const fetchInTheaters = createAsyncThunk(
    'inTheaters/fetchInTheaters',
    async () => {
        const { request } = useHttp();
        return await request(`https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_API_KEY}`)
    }
)

const inTheatersSlice = createSlice({
    name: 'inTheaters',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(fetchInTheaters.pending, state => { state.inTheatersLoadingStatus = 'loading' })
            .addCase(fetchInTheaters.fulfilled, (state, action) => {
                state.inTheaters = action.payload.items;
                state.inTheatersLoadingStatus = 'idle';
            })
            .addCase(fetchInTheaters.rejected, state => { state.inTheatersLoadingStatus = 'error' })
            .addDefaultCase(() => { })
    }
})

const { reducer } = inTheatersSlice;

export default reducer;
