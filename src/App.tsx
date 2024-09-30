import { FC } from 'react';
import HomePage from './pages/homePage';
import NotFound from './pages/notFound';
import Movie from './pages/movie';
import { Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';

const App: FC = () => {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DarkModeProvider>
  );
};

export default App;
