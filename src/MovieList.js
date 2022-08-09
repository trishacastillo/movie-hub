import React from "react";
const MovieList = (props) => {
    const WatchlistComponent=props.watchlistComponent;
    const cover_path='https://image.tmdb.org/t/p/w500';
    return ( 
    <div className="category-container">
        {props.movies.map((movie, index)=>
        <div className="movie-preview" key={movie.id} >
            <p><img src={ cover_path+movie.poster_path } alt="" /></p>
            <b>{ movie.title }</b>
            <p>Released Date: { movie.release_date }</p>
            <div className="watchlist" onClick={()=>props.handleWatchListClick(movie)}>
                <WatchlistComponent/>
            </div>
        </div>
        )}
    </div> );
}
 
export default MovieList;