import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse=()=>{
    const nowPlayingMovies=useNowPlayingMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
     
        </div>
    );
}

export default Browse;

       {/*
                MainContainer
                    -video Background
                    -video tile
                    -video btns
                 -secondary Container
                  -movieList * n
                   - cards *n
                
            */ }