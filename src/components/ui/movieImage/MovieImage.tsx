import { FC } from 'react';
import { Interpolation, Theme } from '@emotion/react';

interface MovieImageProps {
  css?: Interpolation<Theme>;
  filePath: string;
  containerStyle?: Interpolation<Theme>;
}

const BASE_URL = 'https://image.tmdb.org/t/p/';

const MovieImage: FC<MovieImageProps> = ({ css: imageCss, filePath }) => {
  return (
    <img
      src={`${BASE_URL}original${filePath}`}
      css={imageCss}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

export default MovieImage;
