import { FC } from 'react';
import Card from '../card';
import { Results } from '../../../interfaces/MoviesPayload.interface';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 8px;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: nowrap;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledH1 = styled.h1`
  margin: 8px;
`;

interface Props {
  title?: string;
  cards: Results[];
}
const RowList: FC<Props> = (props) => {
  return (
    <Container>
      {props.title && <StyledH1>{props.title}</StyledH1>}
      <StyledDiv>
        {props.cards.map((card: Results) => (
          <Card key={card.id} {...card} />
        ))}
      </StyledDiv>
      <div
        css={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}
      >
        {/* Add styling for */}
        <button
          css={{ margin: '8px' }}
          onClick={() => console.log('View all Clicked!')}
        >
          View all
        </button>
      </div>
    </Container>
  );
};

export default RowList;
