import { useEffect, useState } from 'react';

// const URL = 'https://api.themoviedb.org/3';
// const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';

function MoviesViews() {
  const [name, setName] = useState('');
  //   useEffect(() => {
  //     fetch(
  //       `${URL}/search/movie?api_key=${API_Key}&language=en-US&page=1&include_adult=false&query=${name}`,
  //     )
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error(response.status);
  //         }
  //         return response.json();
  //       })
  //       .then(r => console.log(r));
  //   }, [name]);

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      return;
    }
  };
  const handleChange = e => {
    setName(e.currentTarget.value);
    console.log(e.currentTarget.value);
    console.log(name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
export default MoviesViews;
