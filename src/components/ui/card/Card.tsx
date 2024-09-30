import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Results } from '../../../interfaces/MovieListResponse.interface';
import MovieImage from '../movieImage/MovieImage';
import Rating from '../rating';
import { MovieCardStyles, RatingContainerStyles } from './style';

const Card: FC<Results> = (props) => {
  const naviage = useNavigate();

  const handleClick = (id: number) => {
    naviage(`/movie/${id}`);
  };

  return (
    <MovieCardStyles onClick={() => handleClick(props.id)}>
      <MovieImage filePath={props.poster_path} />
      <RatingContainerStyles className="rating-container">
        <Rating stars={props.vote_average} votes={props.vote_count} />
      </RatingContainerStyles>
    </MovieCardStyles>
  );
};

export default Card;
