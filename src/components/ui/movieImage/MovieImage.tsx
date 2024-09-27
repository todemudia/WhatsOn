import React from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

interface MovieImageProps {
  filePath: string;
  customStyle?: React.CSSProperties;
}

const MovieImage: React.FC<MovieImageProps> = ({ filePath }) => {
  return <StyledImage src={`${BASE_URL}original${filePath}`} loading="lazy" />;
};

export default MovieImage;
