import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollToTop from '../../utils/scrollToTop';

import '../../style/style-reset.css';
import '../../style/style.scss';

const MainPage = lazy(() => import("../pages/MainPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <ScrollToTop />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/moviebe/' element={<MainPage />} />
              <Route path='/moviebe/movies' element={<MoviesPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
