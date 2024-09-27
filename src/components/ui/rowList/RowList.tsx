import { FC, useRef } from 'react';
import Card from '../card';
import styled from 'styled-components';
import { Props } from './types';
import { Results } from '../../../interfaces/MoviesPayload.interface';
import { useDarkMode } from '../../../context/DarkModeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.color.text};
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

  &:hover .floating-button {
    opacity: 1;
  }
`;

const FloatingButton = styled.button<{ left?: boolean; right?: boolean }>`
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 1rem;
  height: 50%;
  border-radius: 1rem;
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
  const { theme } = useDarkMode();

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
      {props.cards.length > 0 && props.title && (
        <StyledH1
          theme={theme}
          onClick={() => console.log('View all Clicked!')}
        >
          {props.title}
        </StyledH1>
      )}
      <InnerContainer>
        <FloatingButton
          left
          onClick={() => handleScroll(-1000)}
          className="floating-button"
        >
          {'<'}
        </FloatingButton>
        <ScrollContainer ref={containerRef}>
          <Content>
            {props.cards &&
              props.cards.map((card: Results) => (
                <Card key={card.id} {...card} />
              ))}
          </Content>
        </ScrollContainer>
        <FloatingButton
          right
          onClick={() => handleScroll(1000)}
          className="floating-button"
        >
          {'>'}
        </FloatingButton>
      </InnerContainer>
    </Container>
  );
};

export default RowList;
