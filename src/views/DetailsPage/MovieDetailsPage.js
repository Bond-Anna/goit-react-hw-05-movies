import { BsBoxArrowInLeft } from 'react-icons/bs';
import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  Route,
  Switch,
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import css from './MoviePage.module.css';
const Cast = lazy(() =>
  import('../Cast/CastView.js' /* webpackChunkName: "cast-views" */),
);
const Reviews = lazy(() =>
  import('../Reviews/ReviewsView.js' /* webpackChunkName: "reviews-view" */),
);

const URL = 'https://api.themoviedb.org';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';

function MovieDetailsPage() {
  const location = useLocation();
  const history = useHistory();
  console.log('H', history);
  console.log('L: ', location);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${URL}/3/movie/${movieId}?api_key=${API_Key}&language=en-US`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(resp => {
        setMovie(resp);
      });
  }, [movieId]);

  const handleOnClik = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      <button type="button" className={css.btn} onClick={handleOnClik}>
        <BsBoxArrowInLeft className={css.btnIcon} />{' '}
        {location?.state?.from?.label ?? 'Go back'}
      </button>
      {movie && (
        <>
          <div className={css.mainInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className={css.poster}
            />
            <div className={css.info}>
              <h2>
                <span>
                  {movie.original_title} ({movie.release_date.slice(0, 4)})
                </span>
              </h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.addInfo}>
            <p className={css.addInfo_title}>Additional information</p>
            <ul className={css.addList}>
              <li className={css.addList_item}>
                <NavLink
                  to={{ pathname: `${url}/cast`, state: { from: location } }}
                  className={css.additional}
                  activeClassName={css.active}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: `${url}/reviews`, state: { from: location } }}
                  className={css.additional}
                  activeClassName={css.active}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast id={movieId} />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews id={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
export default MovieDetailsPage;
