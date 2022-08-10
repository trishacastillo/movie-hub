import MovieList from "./components/MovieList";
import useFetch from "./useFetch";

const Home = () => {
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=1`;
  const { error, isPending, data: movies } = useFetch(popular)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { movies && <div><h2>Trending Movies</h2> <MovieList movies={movies}/></div> }
    </div>
    
  );
}
 
export default Home;
