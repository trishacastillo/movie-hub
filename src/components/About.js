import '../App.css';
const About = () => {
    return ( 
    <div className="about">
        <h3>MovieHUB</h3>
        <p>A web application built using html, css, javascript, react js, and TMDB's API. It shows and automatically update
        the trending movies, categories, and movie rating that users might find useful in looking for movie to watch.
        </p>
        <p>Users can search movie information as well as look for category of their preference. The app can 
         display list of movies based on the search result. View the released date, genre, IMDB rating, producer company, producer country,
         and short plot.
        </p>
        <h3>Credits</h3>
        <p>"This website uses the TMDB API but is not endorsed or certified by TMDB."</p>       
        <p>See more about <a>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt=""/>
        </a>
        </p>
    </div> );
}
 
export default About;