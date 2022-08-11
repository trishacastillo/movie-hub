import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import MovieDetails from './MovieDetails';
import Categories from './components/Categories';
import About from './components/About';
import TvShows from './TvShows';
import MovieListGenre from './components/MovieListGenre';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movie/details">
              <h1>sssss</h1>
            </Route>
            <Route path="/movies/:id">
              <MovieDetails/>
            </Route>
            <Route path="/movie/genre/:id">
              <MovieListGenre/>
            </Route>
            <Route path="/genres">
              <Categories/>
            </Route>
            <Route path="/tvshows">
              <TvShows/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
