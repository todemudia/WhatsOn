import { FC } from 'react';
import Card from '../card';
import { Results } from '../../../interfaces/MoviesPayload.interface';
import styled from 'styled-components';

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

const LeftContainer = styled.div`
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right'
`;

const Button = styled.button`
  margin: '8px';
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
      <LeftContainer>
        {/* Add styling for */}
        <Button onClick={() => console.log('View all Clicked!')}>
          View all
        </Button>
      </LeftContainer>
    </Container>
  );
};

export default RowList;
