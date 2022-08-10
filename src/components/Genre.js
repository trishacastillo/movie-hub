import { Link } from 'react-router-dom';

const Genre = ({ movies }) => {
    const cover_path='https://image.tmdb.org/t/p/w500';
     
  return (
    <div className="category-container">
      {movies.genres.map(movie => (
        <div className="movie-preview" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <h2>{ movie.name }</h2>
            </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Genre;