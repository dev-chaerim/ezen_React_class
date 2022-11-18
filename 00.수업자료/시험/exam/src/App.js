import React, {memo} from 'react';
import Top from './components/Top';
import { Routes, Route } from "react-router-dom";
import Covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route path="/" exapt={true} element={<Top/>}/>
        <Route path="/covid19" element={<Covid19/>}/>
      </Routes>
    </div>
  );
})

export default App;
