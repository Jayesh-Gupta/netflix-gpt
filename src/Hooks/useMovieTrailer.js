import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=(movieId)=>{

    const dispatch = useDispatch();
  
    //console.log(movieTrailer.key);
    const url =
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";
    const getMovieTrailer = async () => {
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers ? trailers[0] : json.results[0];
      dispatch(addMovieTrailer(trailer));
    };
    useEffect(() => {
      getMovieTrailer();
    }, []);

}
export default useMovieTrailer;