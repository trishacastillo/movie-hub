import MovieList from "./components/MovieList";
import TvShowsList from "./components/TvShowsList";
import useFetch from "./useFetch";

const TvShows = () => {
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
  const { error, isPending, data: tvshow } = useFetch(popular)

  return (
    <div className="tv-shows">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tvshow && <div><h2>Trending tvshow</h2> <TvShowsList tvshow={tvshow}/></div> }
    </div>
    
  );
}
 
export default TvShows;
