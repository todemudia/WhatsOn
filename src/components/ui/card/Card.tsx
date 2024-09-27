import { FC } from 'react';
import { Results } from '../../../interfaces/MoviesPayload.interface';
import MovieImage from '../movieImage/MovieImage';
import Rating from '../rating';
import styled from 'styled-components';

const MovieCardStyles = styled.div`
  min-width: 20rem;
  height: auto;
  border-radius: 1.5rem;
  margin: 1rem 0rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  &:hover .rating-container {
    opacity: 1;
  }
`;

const RatingContainerStyles = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Card: FC<Results> = (props) => {
  return (
    <MovieCardStyles>
      <MovieImage filePath={props.poster_path} />
      <RatingContainerStyles className="rating-container">
        <Rating stars={props.vote_average} votes={props.vote_count} />
      </RatingContainerStyles>
    </MovieCardStyles>
  );
};

export default Card;
