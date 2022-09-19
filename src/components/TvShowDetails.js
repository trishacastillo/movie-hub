import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import '../App.css';
import FindSimilar from "./FindSimilar";

const TvShowDetails = () => {
  const cover_path='https://image.tmdb.org/t/p/w500';

  const { id } = useParams();
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const movie_details=`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  const { error, isPending, data: movie_data } = useFetch(movie_details)

  return (
    <div className="movie_data-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie_data && (
        <article>
          <div className="movie-poster">
            <img src={ cover_path+movie_data.poster_path } alt="" />
          </div>
          <div className="movie-card" key={movie_data.id}>
            
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
      <FindSimilar/>
    </div>
  );
}
 
export default TvShowDetails;