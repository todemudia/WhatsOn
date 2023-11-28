import { FC } from 'react';
import Star from '../../Icons/StarIcon';
import roundUp from '../../../utils/roundUp';

//TODO: Styling

interface props {
  stars: number;
  votes: number;
}

const Rating: FC<props> = (props) => {
  return (
    <>
      <div>
        <Star />
        <p>{roundUp(props.stars / 2, 1)}</p>
        <span></span>
        <p>{props.votes}</p>
        <span></span>
        <p></p>
      </div>
    </>
  );
};

export default Rating;
