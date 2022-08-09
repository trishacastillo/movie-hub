import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { imdbID } = useParams();
  const { data: blog, error, isPending } = useFetch('http://www.omdbapi.com/?apikey=50a11407&i=' + imdbID);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.imdbID, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.Title }</h2>
          <p>Written by { blog.imdbID }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;