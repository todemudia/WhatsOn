import { FC, useEffect, useState } from 'react';
import { getUser } from '../../api/movieApi';
import MoviesPayload, {
  Results
} from '../../interfaces/MoviesPayload.interface';
import RowList from '../../components/ui/rowList';
import styled from '@emotion/styled';
import Layout from '../../components/layout';

const StyledDiv = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HomePage: FC = () => {
  const [data, setData] = useState<Results[]>();

  useEffect(() => {
    getUser()
      .then((res: MoviesPayload) => {
        setData(res.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      <StyledDiv>
        <RowList cards={data ?? []} title={'Now Playing'} />
        <RowList cards={data ?? []} title={'Most Popular'} />
        <RowList cards={data ?? []} title={'Trending'} />
      </StyledDiv>
    </Layout>
  );
};

export default HomePage;
