import { FC, useEffect, useState } from 'react';
import { getUser } from '../../api/movieApi';
import MoviesPayload, {
  Results
} from '../../interfaces/MoviesPayload.interface';
import CardList from '../../components/ui/cardList';

const HomePage: FC = () => {
  const [data, setData] = useState<Results[]>();

  useEffect(() => {
    getUser()
      .then((res: MoviesPayload) => {
        setData(res.results);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <CardList cards={data ?? []} />
    </div>
  );
};

export default HomePage;
