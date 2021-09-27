import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const URL = 'https://api.themoviedb.org';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
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
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      /> */}
      <h2>{movie.original_title}</h2>
    </>
  );
}
export default MovieDetailsPage;
