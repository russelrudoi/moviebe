import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook"

const initialState = {
    comingSoon: [],
    comingSoonLoadingStatus: 'idle'
}

export const fetchComingSoon = createAsyncThunk(
    'comingSoon/fetchComingSoon',
    async () => {
        const { request } = useHttp();
        return await request(`https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_API_KEY}`)
    }
)

const comingSoonSlice = createSlice({
    name: 'comingSoon',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(fetchComingSoon.pending, state => { state.comingSoonLoadingStatus = 'loading' })
            .addCase(fetchComingSoon.fulfilled, (state, action) => {
                state.comingSoon = action.payload.items;
                state.comingSoonLoadingStatus = 'idle';
            })
            .addCase(fetchComingSoon.rejected, state => { state.comingSoonLoadingStatus = 'error' })
            .addDefaultCase(() => { })
    }
})

const { reducer } = comingSoonSlice;

export default reducer;