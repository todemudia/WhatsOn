import styled from 'styled-components';

export const MovieCardStyles = styled.div`
  min-width: 15rem;
  height: 22.5rem;
  border-radius: 1.5rem;
  margin: 1rem 0rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover .rating-container {
    opacity: 1;
  }
`;

export const RatingContainerStyles = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;
