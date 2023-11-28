import { FC } from 'react';

import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 8px;
  text-align: left;
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} WatchOn by @JoshMudia. All rights
        reserved.
      </p>
    </StyledFooter>
  );
};

export default Footer;
