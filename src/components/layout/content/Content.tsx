import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 8px;
  background: transparent;
  min-height: 100vh;
`;

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Content;
