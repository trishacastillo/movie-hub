import { Link } from 'react-router-dom';

const TvShowsList = ({ tvshow }) => {
    const cover_path='https://image.tmdb.org/t/p/w500';
     
  return (
    <div className="category-container">
      {tvshow.results.map(tv => (
        <div className="tv-preview" key={tv.id}>
            <p><img src={ cover_path+tv.poster_path } alt="" /></p>
            <Link to={`/tvshow/${tv.id}`}>
            <p>{ tv.name }</p>
            </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TvShowsList;