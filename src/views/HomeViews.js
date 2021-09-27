import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const URL = 'https://api.themoviedb.org/3';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
const Time_Window = 'week';

function HomeView() {
  const [movies, setMovies] = useState([]);
  // const { url } = useRouteMatch();
  //   console.log(match);
  useEffect(() => {
    fetch(`${URL}/trending/all/${Time_Window}?api_key=${API_Key}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(({ results }) => {
        console.log({ ...results });
        setMovies([...results]);
      });
  }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
}
export default HomeView;
