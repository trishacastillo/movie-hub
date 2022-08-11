import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieHUB</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/genres">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/about">About</Link>

      </div>
    </nav>
  ); 
}
 
export default Navbar;
