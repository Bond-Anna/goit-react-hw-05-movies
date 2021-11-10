import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsCameraReels } from 'react-icons/bs';
import css from './HomeViews.module.css';

const URL = 'https://api.themoviedb.org/3';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
const Time_Window = 'day';

function HomeView() {
  const location = useLocation();
  console.log('HomeView', location);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URL}/trending/all/${Time_Window}?api_key=${API_Key}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(({ results }) => {
        setMovies([...results]);
      });
  }, []);

  return (
    <>
      <h2 className={css.pageTitle}>Trending for today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: { location, label: 'Back to Trending Movies' } },
              }}
              className={css.movie}
            >
              <BsCameraReels className={css.icon} />
              {movie.title || movie.name}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default HomeView;
