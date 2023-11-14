import { FC, useEffect } from 'react';
import { getUser } from '../../api/movieApi';

const HomePage: FC = () => {
  useEffect(() => {
    console.log(getUser());
  }, []);

  return <>Movie List here!</>;
};

export default HomePage;
