import { FC } from 'react';

interface props {
  filePath: string;
  style: string;
}
const BASE_URL = 'https://image.tmdb.org/t/p/';

const MovieImage: FC<props> = (props) => {
  return (
    <img src={BASE_URL + 'original' + props.filePath} className={props.style} />
  );
};

export default MovieImage;
