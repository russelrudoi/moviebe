import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollToTop from '../../utils/scrollToTop';

import '../../style/style-reset.css';
import '../../style/style.scss';
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import("../pages/MainPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const SeriesPage = lazy(() => import("../pages/SeriesPage"));
const InTheatersPage = lazy(() => import("../pages/InTheatersPage"));
const ComingSoonPage = lazy(() => import("../pages/ComingSoonPage"));
const SinglePage = lazy(() => import("../pages/SinglePage"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <ScrollToTop />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/movies' element={<MoviesPage />} />
              <Route path='/series' element={<SeriesPage />} />
              <Route path='/intheaters' element={<InTheatersPage />} />
              <Route path='/comingsoon' element={<ComingSoonPage />} />
              <Route path='/:id' element={<SinglePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
