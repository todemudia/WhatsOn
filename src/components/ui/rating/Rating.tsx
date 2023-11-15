import { FC } from 'react';
import Star from '../../Icons/Star';
import roundUp from '../../../utils/roundUp';

interface props {
  stars: number;
  votes: number;
}

const Rating: FC<props> = (props) => {
  return (
    <>
      <div className="flex items-center">
        <Star className="w-4 h-4 text-yellow-300" />
        <p className="ms-1 text-sm font-bold text-gray-900">
          {roundUp(props.stars / 2, 1)}
        </p>
        <span className="w-1 h-1 mx-2"></span>
        <p className="text-sm font-bold text-gray-900">{props.votes} Votes</p>
      </div>
    </>
  );
};

export default Rating;
