import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import '../App.css';
import MovieList from "./MovieList";

const MovieListGenre = () => {

  const { id } = useParams();
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`;
  const { error, isPending, data: movie_data } = useFetch(popular)

  return (
    <div className="movie_data-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie_data && (
        <MovieList movies={movie_data}/>
      )} 
    </div>
  );
}
 
export default MovieListGenre;