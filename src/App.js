import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeViews.js' /* webpackChunkName: "home-view" */),
);
const MoviesViews = lazy(() =>
  import(
    './views/SearchMovie/MoviesViews.js' /* webpackChunkName: "movies-views" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/DetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-detail-page" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "notfound-view" */),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </div>
  );
}

export default App;
