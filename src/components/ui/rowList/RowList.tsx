import { FC, useRef } from 'react';
import Card from '../card';
import { Props } from './types';
import { MovieList } from '../../../interfaces/MovieListResponse.interface';
import { useDarkMode } from '../../../context/DarkModeContext';
import {
  Container,
  Content,
  FloatingButton,
  InnerContainer,
  ScrollContainer,
  StyledH1
} from './style';

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
              props.cards.map((card: MovieList) => (
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
