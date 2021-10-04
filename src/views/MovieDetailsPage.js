import { useEffect, useState } from 'react';
// import {  } from 'react-router';
import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const URL = 'https://api.themoviedb.org';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const { url } = useRouteMatch();
  console.log(url);
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
        console.log(resp);
        setMovie(resp);
      });
  }, [movieId]);

  return (
    <>
      <button type="button">
        <a href="/">Go back</a>
      </button>
      {movie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h2>
              <span>{movie.original_title}</span>
              <span> ({movie.release_date.slice(0, 4)})</span>
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
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      <Switch>
        <Route path="/movies/:movieId/cast">
          <Cast id={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews id={movieId} />
        </Route>
      </Switch>
    </>
  );
}
export default MovieDetailsPage;
