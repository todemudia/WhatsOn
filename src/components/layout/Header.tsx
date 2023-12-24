import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import MovieIcon from '../Icons/MovieIcon';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../ui/toggleButton/ToggleButton';
import { Theme, useDarkMode } from '../../context/DarkModeContext';

const StyledHeader = styled.header<{ theme: Theme }>`
  background-color: ${(props) => props.theme.color.foreground};
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
`;

const NameAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: scale(1.05);
  }
`;

const StyledTitle = styled.h1`
  margin: 8px;
  margin-left: 0px;
`;

const StyledIcon = css`
  margin: 8px;
  height: 30px;
  width: 20px;
`;

const Header: FC = () => {
  const { toggleDarkMode, theme } = useDarkMode();
  const navigate = useNavigate();

  return (
    <StyledHeader theme={theme}>
      <NameAndLogo onClick={() => navigate('/')}>
        <MovieIcon className={StyledIcon} />
        <StyledTitle>WatchOn</StyledTitle>
      </NameAndLogo>
      <ToggleButton onToggle={() => toggleDarkMode()} />
    </StyledHeader>
  );
};

export default Header;
