import React from 'react';

import Header from '../header/Header';
import Promo from '../promo/Promo';
import InTheatersList from '../inTheatersList/InTheatersList';
import ComingSoon from '../comingSoon/ComingSoon';
import Movies from '../movies/Movies';
import Series from '../series/Series';
import Footer from '../footer/Footer';

import '../../style/style-reset.css';
import '../../style/style.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Promo />
      <main>
        <InTheatersList />
        <ComingSoon />
        <Movies />
        <Series />
      </main>
      <Footer />
    </div>
  );
}

export default App;
