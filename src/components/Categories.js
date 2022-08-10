import useFetch from "../useFetch";
import Genre from "./Genre";

const Categories = () => {
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const genre=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const { error, isPending, data: movies } = useFetch(genre)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { movies && <div><h2>Categories</h2> <Genre movies={movies}/></div> }
    </div>
    
  );
}
 
export default Categories;
