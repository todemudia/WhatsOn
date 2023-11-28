import { FC } from 'react';
import Card from '../card';
import { Results } from '../../../interfaces/MoviesPayload.interface';

//TODO: Styling

interface Props {
  title?: string;
  cards: Results[];
}
const GridList: FC<Props> = (props) => {
  return (
    <>
      {props.title && <h1>{props.title}</h1>}
      <div>
        {props.cards.map((card: Results) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default GridList;
