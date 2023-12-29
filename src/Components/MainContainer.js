import Header from "./Header";
import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies=useSelector(store=>store.movies);

  const mainMovie=movies?.nowPlayingMovies[0];
  if(!mainMovie)return;
  const{original_title,overview,id}=mainMovie;
  return (
    <div>
      <Header />
      <VideoTitle title={original_title} overview={overview}/>
      <BackgroundVideo  movieId={id}/>
    </div>
  );
};
export default MainContainer;
