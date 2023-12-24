import { FC, useEffect, useState } from 'react';
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from '../../api/movieApi';
import { Results } from '../../interfaces/MoviesPayload.interface';
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
  const [nowPlayingList, setNowPlayingList] = useState<Results[]>();
  const [popularList, setPopularList] = useState<Results[]>();
  const [topRatedList, setTopRatedList] = useState<Results[]>();
  const [upcomingList, setUpcomingList] = useState<Results[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          nowPlayingResponse,
          popularResponse,
          topRatedResponse,
          upcomingResponse
        ] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getTopRated(),
          getUpcoming()
        ]);

        setNowPlayingList(nowPlayingResponse.results);
        setPopularList(popularResponse.results);
        setTopRatedList(topRatedResponse.results);
        setUpcomingList(upcomingResponse.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <StyledDiv>
        <RowList cards={nowPlayingList ?? []} title={'Now Playing'} />
        <RowList cards={popularList ?? []} title={'Most Popular'} />
        <RowList cards={topRatedList ?? []} title={'Top Rated'} />
        <RowList cards={upcomingList ?? []} title={'Upcoming'} />
      </StyledDiv>
    </Layout>
  );
};

export default HomePage;
