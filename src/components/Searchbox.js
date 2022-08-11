import React from "react";
const SearchBox = (props) => {
    return ( 
        <div className="search-box">
            <input type="text" 
                   placeholder="Search ..."
                   value={props.value}
                   onChange={(event)=>props.setSearch(event.target.value)} />
        </div>
     );
}
 
export default SearchBox;