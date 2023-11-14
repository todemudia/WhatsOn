import { FC } from 'react';
import { Results } from '../../interfaces/MoviesPayload.interface';
import MovieImage from '../movieImage/MovieImage';

const Card: FC<Results> = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <MovieImage style="w-full" filePath={props.poster_path} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};

export default Card;
