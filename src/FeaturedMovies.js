import ImageSlider from "./components/ImageSlider";
import useFetch from "./useFetch";

const FeaturedMovies = () => {
  const API_KEY='ae7f7ed289b6d77c7761b724b99082dc';
  const popular=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=1`;
  const { data: f_movies } = useFetch(popular)

      const containerStyles = {
        height: "300px",
        margin: "0 auto",
      };
  return (
    <div>
      <h2>Featured Movies</h2>
      <div style={containerStyles}>
      { f_movies && <ImageSlider slides={f_movies} /> }
      </div>
    </div>
  );
};

export default FeaturedMovies;