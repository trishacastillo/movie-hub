import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./components/MovieList";
import SearchBox from "./components/Searchbox";
import useFetch from "./useFetch";
import ReactLoading from "react-loading";
import TvShows from "./TvShows";

const Home = () => {
  const [search, setSearch]=useState([]);
   
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=1`;
  const urlSearch=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`;
  const [url, setUrl]=useState([popular]);
 
  //const { error, isPending, data: movies } = useFetch(popular)
  const { error, isPending, data: searchData } = useFetch(url)
  useEffect(()=>{
    setSearch(search);
  },[search]);

  function searchClick() {
    if (search !== undefined || search !== null || search=='') {
      setUrl(urlSearch)
    }else{
      setUrl(popular)}
  }



  return (
    <div className="home">
      <div className="searchBox">
        <SearchBox search={search} setSearch={setSearch}/>
        <button onClick={searchClick}>Search</button>
      </div>
      
      { error && <div>{ error }</div> }
      { isPending && 
        <div className="loaders">
          <ReactLoading type="spin" color="#0000FF"
          size={10} className="loaders"/>
        </div> }
      { searchData && <div><h2>Search Movies</h2> <MovieList movies={searchData}/></div> }
      <TvShows/>
    </div>
    
  );
}
 
export default Home;
