import { useEffect, useState } from "react";
import AddWatchList from "./components/AddWatchList";
import FilterGenre from "./components/FilterGenre";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const MovieNav = () => {
    const [movies, setMovies]=useState([]);
    const [search, setSearch]=useState(['Captain Marvel']);
    const [watchlist, setWatchList]=useState([]);

    const getMovieRequest = async(search)=>{
      const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
      //const API='https://api.themoviedb.org/3/discover/movie?api_key=ae7f7ed289b6d77c7761b724b99082dc&language=en-US&sort_by=popularity.desc&include_video=true&page=';
      const url='https://api.themoviedb.org/3/discover/movie?api_key=ae7f7ed289b6d77c7761b724b99082dc&language=en-US&sort_by=popularity.desc&include_video=true&page=1';
      const cartoon="https://api.themoviedb.org/3/discover/movie/?api_key=ae7f7ed289b6d77c7761b724b99082dc&with_genres=27";
      const genre="https://api.themoviedb.org/3/genre/movie/list?api_key=ae7f7ed289b6d77c7761b724b99082dc&language=en-US"
      
      const response = await fetch(genre);
      const responseJson= await response.json();
      if(responseJson.genres){
        setMovies(responseJson.genres);
      }
      
    }

    useEffect(()=>{
      getMovieRequest(search);
    },[search]);

    const addMovies=(movie)=>{
      const newWatchList=[...watchlist,movie];
      setWatchList(newWatchList);
    }
  return (
    
    <div className="MovieNav">
      <SearchBox search={search} setSearch={setSearch}/>
      <MovieListHeading heading="Newly Released Movies"/>
      <div>
        <FilterGenre genre={movies}/>
      </div>

    </div>
  );
}
 
export default MovieNav;
