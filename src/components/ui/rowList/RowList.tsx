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
  gap: 8px;
  flex-wrap: nowrap;
  overflow: auto;
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
    </Container>
  );
};

export default RowList;
