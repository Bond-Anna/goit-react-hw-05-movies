import { useEffect, useState } from 'react';

const URL = 'https://api.themoviedb.org';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
function Cast({ id }) {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch(`${URL}/3/movie/${id}/credits?api_key=${API_Key}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(({ cast }) => {
        setActors(cast);
      });
  }, [id]);
  console.log(actors);
  console.log(id);
  return (
    <>
      {actors.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </>
  );
}
export default Cast;
