import { Link } from "react-router-dom";

const Navbar = () => {
  const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
  };
  return (
    <nav className="topnav" id="topnav">
      <a href="#" className="logo">
      <h1>MovieCyclopedia</h1>
      </a>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/genres">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/about">About</Link>
      </div>
      
      <button className="icon" onClick={toggle}><i className='fa fa-bars'></i></button>
   {/* <nav className="navbar">
        
      
    </nav> */}
</nav>
   
  ); 
}
 
export default Navbar;
