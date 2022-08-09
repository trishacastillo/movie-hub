import { useEffect, useState } from "react";
import AddWatchList from "./components/AddWatchList";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const Home = () => {
    const [movies, setMovies]=useState([]);
    const [search, setSearch]=useState(['Captain Marvel']);
    const [watchlist, setWatchList]=useState([]);

    const getMovieRequest = async(search)=>{
      const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
      //const API='https://api.themoviedb.org/3/discover/movie?api_key=ae7f7ed289b6d77c7761b724b99082dc&language=en-US&sort_by=popularity.desc&include_video=true&page=';
      const popular=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=1`;
      const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`;
      const response = await fetch(popular);
      const responseJson= await response.json();
      if(responseJson.results){
        setMovies(responseJson.results);
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
    
    <div className="home">
      <SearchBox search={search} setSearch={setSearch}/>
      <MovieListHeading heading="Popular Movies"/>
      <div>
        <MovieList movies={movies} handleWatchListClick={addMovies} 
                                   watchlistComponent={AddWatchList} />
      </div>
      <MovieListHeading heading="New Released"/>
      <div>
        <MovieList movies={movies} handleWatchListClick={addMovies} 
                                   watchlistComponent={AddWatchList} />
      </div>
      <MovieListHeading heading="Watch List"/>
      <MovieList movies={watchlist} handleWatchListClick={addMovies} watchlistComponent={AddWatchList} />
     
    </div>
  );
}
 
export default Home;
