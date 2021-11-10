import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import css from './MoviesView.module.css';
const URL = 'https://api.themoviedb.org/3';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';

function MoviesViews() {
  const history = useHistory();
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);

  console.log('MoviesViews: ', location);

  const movieName = new URLSearchParams(location.search).get('query') ?? '';

  const handleChange = e => {
    if (e.target.value.trim() === '') {
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push({
      ...location,
      search: `query=${e.target.searchName.value}`,
    });
    e.target.reset();
  };

  useEffect(() => {
    if (movieName.trim() === '') {
      return;
    }

    fetch(
      `${URL}/search/movie?api_key=${API_Key}&language=en-US&page=1&include_adult=false&query=${movieName}`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(({ results }) => {
        setMovieList([...results]);
      });
  }, [movieName]);

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchName"
          onChange={handleChange}
          className={css.formInput}
        />
        <button type="submit" className={css.formBtn}>
          <BsSearch />
        </button>
      </form>
      {movieList && (
        <ul>
          {movieList.map(movie => (
            <li key={movie.id} className={css.movieItem}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: { location, label: 'Back to Search' } },
                }}
                className={css.movie}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default MoviesViews;
