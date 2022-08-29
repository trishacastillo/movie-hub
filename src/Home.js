import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./components/MovieList";
import SearchBox from "./components/Searchbox";
import useFetch from "./useFetch";
import ReactLoading from "react-loading";

const Home = () => {
  const [search, setSearch]=useState([]);
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=1`;
  const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`;
  const { error, isPending, data: movies } = useFetch(popular)
  const { data: searchData } = useFetch(url)
  useEffect(()=>{
    setSearch(search);
  },[search]);


  return (
    <div className="home">
      <SearchBox search={search} setSearch={setSearch}/>
      { error && <div>{ error }</div> }
      { isPending && 
        <div className="loaders">
          <ReactLoading type="spin" color="#0000FF"
          size={10} className="loaders"/>
        </div> }
      { searchData && <div><h2>Search Movies</h2> <MovieList movies={searchData}/></div> }
      {searchData ? (<div></div>):(<div>{ movies && <div><h2>Trending Movies</h2> <MovieList movies={movies}/></div> }</div>) }
    </div>
    
  );
}
 
export default Home;
