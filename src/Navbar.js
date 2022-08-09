
import { Link } from "react-router-dom";


const Navbar = () => {
  
  
  return (
    <nav className="navbar">
      <h1>Castle Blog</h1>
      <div className="links">
        
        <Link to="/">Home</Link>
        <Link to="/movies-category">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/upcoming">Upcoming</Link>
        <Link to="/watchlist">Watch List</Link>
        <Link to="/about" style={{ 
          color: 'white', 
          backgroundColor: '#ff0042',
          borderRadius: '8px' 
        }}>About</Link>
      </div>
    </nav>
  ); 
}
 
export default Navbar;
