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
// const SingleItemLayout = lazy(() => import("../singleItemLayout/SingleItemLayout"));
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
              <Route path='/moviebe/' element={<MainPage />} />
              <Route path='/moviebe/movies' element={<MoviesPage />} />
              <Route path='/moviebe/series' element={<SeriesPage />} />
              <Route path='/moviebe/intheaters' element={<InTheatersPage />} />
              <Route path='/moviebe/comingsoon' element={<ComingSoonPage />} />
              <Route path='/moviebe/:id' element={<SinglePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
