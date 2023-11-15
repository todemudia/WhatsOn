import { FC } from 'react';
import { Results } from '../../../interfaces/MoviesPayload.interface';
import MovieImage from '../movieImage/MovieImage';
import Rating from '../rating';

const Card: FC<Results> = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <MovieImage style="w-full" filePath={props.poster_path} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{props.title}</div>
      </div>
      <div className="px-6 pb-4 flex flex-row-reverse">
        <Rating stars={props.vote_average} votes={props.vote_count} />
      </div>
    </div>
  );
};

export default Card;
