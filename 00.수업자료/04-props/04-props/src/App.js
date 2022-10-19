import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import GradeTable from './pages/GradeTable';
import MyChildren from './pages/MyChildren';
import MyProps from './pages/MyProps';
import MyPropsTypes from './pages/MyPropTypes';

function App() {
  return (
    <div>
      <h1>04-props</h1>
      <nav>
        <Link to='/myprops'>MyProps</Link>&nbsp;|&nbsp;
        <Link to='/mypropstypes'>MyPropsTypes</Link>&nbsp;|&nbsp;
        <Link to='/mychildren'>MyChildren</Link>&nbsp;|&nbsp;
        <Link to='/grade_table'>GradeTable(demo)</Link>&nbsp;|&nbsp;
      </nav>
      <hr />

      <Routes>
        <Route path="/myprops" element={<MyProps/>}/>
        <Route path="/mypropstypes" element={<MyPropsTypes/>}/>
        <Route path="/mychildren" element={<MyChildren/>}/>
        <Route path="/grade_table" element={<GradeTable/>}/>
      </Routes>
    </div>
  );
}

export default App;
