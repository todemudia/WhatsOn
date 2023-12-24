import { FC } from 'react';
import styled from '@emotion/styled';
import { Theme, useDarkMode } from '../../context/DarkModeContext';

const StyledFooter = styled.footer<{ theme: Theme }>`
  background-color: ${(props) => props.theme.color.foreground};
  color: white;
  padding: 8px;
  text-align: left;
`;

const Footer: FC = () => {
  const { theme } = useDarkMode();

  return (
    <StyledFooter theme={theme}>
      <p>
        &copy; {new Date().getFullYear()} WatchOn by @JoshMudia. All rights
        reserved.
      </p>
    </StyledFooter>
  );
};

export default Footer;
