import { FC, useRef, useState } from 'react';
import Card from '../card';
import styled from 'styled-components';
import { Props } from './types';
import { Results } from '../../../interfaces/MoviesPayload.interface';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  margin: 8px;
`;

const Content = styled.div`
  width: 98vw;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const FloatingButton = styled.button<{ left?: boolean; right?: boolean }>`
  height: 50%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 1rem;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  ${({ left }) => left && `left: 0;`}
  ${({ right }) => right && `right: 0;`}

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const RowList: FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollAmount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Container>
      {props.title && (
        <StyledH1 onClick={() => console.log('View all Clicked!')}>
          {props.title}
        </StyledH1>
      )}
      <InnerContainer>
        <FloatingButton left onClick={() => handleScroll(-1000)}>
          {'<'}
        </FloatingButton>
        <ScrollContainer ref={containerRef}>
          <Content>
            {props.cards.map((card: Results) => (
              <Card key={card.id} {...card} />
            ))}
          </Content>
        </ScrollContainer>
        <FloatingButton right onClick={() => handleScroll(1000)}>
          {'>'}
        </FloatingButton>
      </InnerContainer>
    </Container>
  );
};

export default RowList;
