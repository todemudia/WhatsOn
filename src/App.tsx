import { FC } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import HomePage from './pages/homePage';

const App: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content>
        <HomePage />
      </Content>
      <Footer />
    </div>
  );
};

export default App;
