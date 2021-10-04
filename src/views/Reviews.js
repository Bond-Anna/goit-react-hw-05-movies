import { useEffect, useState } from 'react';

const URL = 'https://api.themoviedb.org';
const API_Key = 'b0a51c5fb2c3f42914edb92a4e0001cb';
function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${URL}/3/movie/${id}/reviews?api_key=${API_Key}&language=en-US`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(({ results }) => {
        setReviews(results);
      });
  }, [id]);
  console.log(reviews);
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
export default Reviews;
