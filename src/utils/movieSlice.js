import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        movieTrailer:null
    },
    reducers:{
        addNowPalyingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    }
});

export const{addNowPalyingMovies,addMovieTrailer}=movieSlice.actions;
export default movieSlice.reducer;