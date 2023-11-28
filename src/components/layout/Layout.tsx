import { FC, ReactNode } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import styled from '@emotion/styled';

const StyledLayout = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
