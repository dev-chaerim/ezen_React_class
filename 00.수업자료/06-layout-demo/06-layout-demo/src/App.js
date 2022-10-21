/** @filename: App.js
 * @description: 레이아웃 구성 컨테이너
 * @author: Kwon C.R (cofla.dev@gmail.com)
 */


import React from 'react';
import {Routes, Route } from "react-router-dom";

import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' exact={true} element={<Main />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
