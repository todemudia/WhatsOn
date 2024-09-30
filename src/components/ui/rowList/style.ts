import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.color.text};
  margin: 8px;
`;

export const Content = styled.div`
  width: 98vw;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  &:hover .floating-button {
    opacity: 1;
  }
`;

export const FloatingButton = styled.button<{
  left?: boolean;
  right?: boolean;
}>`
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
