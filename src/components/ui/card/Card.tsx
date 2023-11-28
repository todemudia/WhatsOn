/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Results } from '../../../interfaces/MoviesPayload.interface';
import MovieImage from '../movieImage/MovieImage';
import Rating from '../rating';
import { css } from '@emotion/react';

const movieCardStyles = css`
  min-width: 20rem;
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const imageContainerStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const titleStyles = css`
//   font-weight: bold;
//   font-size: 1.5rem;
// `;

// const ratingContainerStyles = css`
//   display: flex;
//   justify-content: flex-end;
//   padding-bottom: 1rem;
// `;

const Card: FC<Results> = (props) => {
  return (
    <div css={movieCardStyles}>
      <MovieImage
        containerStyle={imageContainerStyles}
        filePath={props.poster_path}
      />
      {/* <div css={{ padding: '1.5rem' }}>
        <p css={titleStyles}>{props.title}</p>
      </div>
      <div css={ratingContainerStyles}>
        <Rating stars={props.vote_average} votes={props.vote_count} />
      </div> */}
    </div>
  );
};

export default Card;
