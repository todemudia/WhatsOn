import { FC } from 'react';
import HomePage from './pages/homePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound';
import { DarkModeProvider } from './context/DarkModeContext';

const App: FC = () => {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DarkModeProvider>
  );
};

export default App;
