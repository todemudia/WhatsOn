import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: 8px;
  flex: 1;
`;

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Content;
