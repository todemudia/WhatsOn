import { FC } from 'react';
import Star from '../../Icons/StarIcon';
import roundUp from '../../../utils/roundUp';
import styled from 'styled-components';

interface RatingProps {
  stars: number;
  votes: number;
}

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
`;

const RatingText = styled.p`
  margin: 0 0.5rem;
  color: inherit;
`;

const Separator = styled.span`
  margin: 0 0.5rem;
`;

const StarIcon = styled(Star)`
  color: gold;
`;

const Rating: FC<RatingProps> = ({ stars, votes }) => {
  return (
    <RatingContainer>
      <StarIcon />
      <RatingText>{roundUp(stars / 2, 1)}</RatingText>
      <Separator>|</Separator>
      <RatingText>{votes} votes</RatingText>
    </RatingContainer>
  );
};

export default Rating;
