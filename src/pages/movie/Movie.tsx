import { FC, useEffect, useState } from 'react';
import { getMovie } from '../../api/movieApi';
import { useParams } from 'react-router-dom';
import { MovieType } from '../../interfaces/MovieResponse.interface';

const Movie: FC = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    movieId &&
      getMovie(movieId)
        .then((data) => {
          setMovie(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error fetching movie details:', error);
          setLoading(false);
        });
  }, [movieId]);

  return <>{loading ? <p>loading...</p> : <p>{movie?.id}</p>}</>;
};

export default Movie;
