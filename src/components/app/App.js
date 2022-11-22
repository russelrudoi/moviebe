import React from 'react';
import Header from '../header/Header';
import Promo from '../promo/Promo';
import NavBar from '../navBar/NavBar';

import '../../style/style-reset.css'
import '../../style/style.scss'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Promo/>
      <NavBar/>
    </div>
  );
}

export default App;
