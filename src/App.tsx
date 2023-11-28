import { FC } from 'react';
import HomePage from './pages/homePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
