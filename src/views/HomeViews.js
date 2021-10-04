import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const URL = 'https://api.themoviedb.org/3';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
const Time_Window = 'day';

function HomeView() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${URL}/trending/all/${Time_Window}?api_key=${API_Key}`)
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status_message);
      })
      .then(({ results }) => {
        console.log({ ...results });
        setMovies([...results]);
      })
      .catch(error => console.log(error.status_message));
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
