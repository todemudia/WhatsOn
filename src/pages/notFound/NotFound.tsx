/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import styled from '@emotion/styled';
import Layout from '../../components/layout';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const NotFound: FC = () => {
  return (
    <Layout>
      <StyledDiv>
        <h1>Page not found!</h1>
      </StyledDiv>
    </Layout>
  );
};

export default NotFound;
