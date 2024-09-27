import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const BASE_URL = 'https://image.tmdb.org/t/p/';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const StyledImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover; /* or 'contain', depending on your preference */
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Skeleton = styled.div<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$loaded ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
`;

interface MovieImageProps {
  filePath: string;
  customStyle?: React.CSSProperties;
}

const MovieImage: React.FC<MovieImageProps> = ({ filePath, customStyle }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageContainer style={customStyle}>
      <Skeleton $loaded={loaded} />
      <StyledImage
        src={`${BASE_URL}original${filePath}`}
        loading="lazy"
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        alt="Movie Poster"
      />
    </ImageContainer>
  );
};

export default MovieImage;
