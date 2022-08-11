import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './App.css';

const MovieDetails = () => {
  const cover_path='https://image.tmdb.org/t/p/w500';

  const { id } = useParams();
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const { error, isPending, data: movie_data } = useFetch(popular)

  return (
    <div className="movie_data-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie_data && (
        <article>
          <div className="movie-poster">
            <img src={ cover_path+movie_data.poster_path } alt="" />
          </div>
          <div className="movie-card">
            
            <h2>{ movie_data.title }</h2>
            <p>Overview { movie_data.overview }</p>
            <p>Released Date { movie_data.release_date }</p>
            <p>Status { movie_data.status }</p>
            <p>Production Company { movie_data.production_companies[0].name }</p>
            <p>Production Country { movie_data.production_countries[0].name }</p>
            <div className="rating">
              { movie_data.vote_average.toFixed(1) }
            </div>
          </div>
          
          
        </article>
      )} 
    </div>
  );
}
 
export default MovieDetails;