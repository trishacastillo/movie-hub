import React from "react";
const FilterGenre = (props) => {
    
    return ( 
    <div className="genre-container">
        {props.genre.map((genre, index)=>
        <div className="genre-preview" key={genre.id} >
            <p>{ genre.name }</p>
        </div>
        )}
    </div> );
}
 
export default FilterGenre;