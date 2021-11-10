import { useEffect, useState } from 'react';
import css from './Cast.module.css';

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
  return (
    <div className={css.cast}>
      {actors.map(actor => (
        <li key={actor.id} className={css.actor}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'http://dummyimage.com/100x150/c0c0c0&text=No+image'
            }
            alt={actor.name}
            className={css.actorImg}
          />

          <p className={css.actorName}>{actor.name}</p>
          <p className={css.actorCharacter}>Character: {actor.character}</p>
        </li>
      ))}
    </div>
  );
}
export default Cast;
