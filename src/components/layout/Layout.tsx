import { FC, ReactNode } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';

const StyledLayout = styled.div`
  background-color: ${(props) => props.theme.color.background};
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
  const { theme } = useDarkMode();

  return (
    <StyledLayout theme={theme}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
