import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const cover_path='https://image.tmdb.org/t/p/w500';
     
  return (
    <div className="category-container">
      {movies.results.map(movie => (
        <div className="movie-preview" key={movie.id}>
            <p><img src={ cover_path+movie.poster_path } alt="" /></p>
            <Link to={`/movies/${movie.id}`}>
            <h2>{ movie.title }</h2>
            <p>Written by { movie.released_date }</p>
            </Link>
        </div>
      ))}
    </div>
  );
}
 
export default MovieList;