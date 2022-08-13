import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const cover_path='https://image.tmdb.org/t/p/w500';
     
  return (
    <div className="category-container">
      {movies.results.map(movie => (
        <div className="movie-preview" key={movie.id}>
            <img src={ cover_path+movie.poster_path } alt="" />
            <Link to={`/movies/${movie.id}`}>
            <p>{ movie.title }</p>
            <p>{ new Date(movie.release_date).getFullYear() }</p>
            </Link>
        </div>
      ))}
    </div>
  );
}
 
export default MovieList;