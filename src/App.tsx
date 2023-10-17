import { useEffect } from 'react';
import { getUser } from './api/movieApi';

const App = () => {
  useEffect(() => {
    getUser();
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
