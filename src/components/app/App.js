import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import {MainPage, MoviesPage} from '../pages'

import '../../style/style-reset.css';
import '../../style/style.scss';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
