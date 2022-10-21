import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Main from './pages/Main';
import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' exact={true} element={<Main />}/>
        <Route path='/About' exact={true} element={<Main />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
