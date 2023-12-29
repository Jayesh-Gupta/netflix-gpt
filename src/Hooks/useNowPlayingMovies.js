import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { addNowPalyingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{

    
    const dispatch=useDispatch();

    const getNowPlayingMovies=async()=>{
        const data=await fetch(NOW_PLAYING_URL,API_OPTIONS);
        const json=await data.json();
       
        dispatch(addNowPalyingMovies(json.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);

}

export default useNowPlayingMovies;