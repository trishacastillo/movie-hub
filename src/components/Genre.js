import { Link } from 'react-router-dom';

const Genre = ({ movies }) => {
    const cover_path='https://image.tmdb.org/t/p/w500';
     
  return (
    <div className="genre-container">
      {movies.genres.map(movie => (
        <div className="genre-preview" key={movie.id}>
            <Link to={`/movie/genre/${movie.id}`}>
            <h2>{ movie.name }</h2>
            </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Genre;