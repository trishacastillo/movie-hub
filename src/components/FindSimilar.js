import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import '../App.css';
import TvShowsList from "./TvShowsList";

const FindSimilar = () => {
  const cover_path='https://image.tmdb.org/t/p/w500';

  const { id } = useParams();
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const movie_details=`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const { error, isPending, data: movie_data } = useFetch(movie_details)

  return (
    <div className="movie_data-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie_data && (
        <div><h2>Recommendations</h2> <TvShowsList tvshow={movie_data}/></div>

      )} 
    </div>
  );
}
 
export default FindSimilar;