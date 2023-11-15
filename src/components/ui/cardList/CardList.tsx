import { FC } from 'react';
import Card from '../card';
import { Results } from '../../../interfaces/MoviesPayload.interface';

interface Props {
  cards: Results[];
}
const CardList: FC<Props> = (props) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-start">
      {props.cards.map((card: Results) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
