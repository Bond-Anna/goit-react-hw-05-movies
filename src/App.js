import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomeView from './views/HomeViews';
import MoviesViews from './views/MoviesViews';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviesViews />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
