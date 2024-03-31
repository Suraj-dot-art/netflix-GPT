import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayMovies:null,
            trailerVideo:null,
        },
        reducers: {
            addNowPlayMovies : (state,action) => {
                state.nowPlayMovies= action.payload;
            },
            addTrailerVideo : (state,action) => {
                state.trailerVideo= action.payload;
            },
        }
    }
);
export const { addNowPlayMovies,addTrailerVideo}= movieSlice.actions;

export default movieSlice.reducer;