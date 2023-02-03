import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import {MainPage, MoviesPage} from '../pages'
import ScrollToTop from '../../utils/scrollToTop';

import '../../style/style-reset.css';
import '../../style/style.scss';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <ScrollToTop/>
        <main>
          <Routes>
            <Route path='/moviebe/' element={<MainPage/>}/>
            <Route path='/moviebe/movies' element={<MoviesPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
