import React, {memo} from 'react';
import {Routes, Route } from "react-router-dom";
import TrafficList from './pages/TrafficList';
import TrafficAdd from './pages/TrafficAdd';
import TrafficEdit from './pages/TrafficEdit';
import TrafficView from './pages/TrafficView';

const App = memo(() => {
  return (
    <div>
      <h1>Traffic_Acc</h1>
      
      <Routes>
        <Route path='/' exapt={true} element={<TrafficList/>}/>
        <Route path='/traffic_add' element={<TrafficAdd/>}/>
        <Route path='/traffic_view/:id' element={<TrafficView/>}/>
        <Route path='/traffic_edit/:id' element={<TrafficEdit/>}/>
      </Routes>
    </div>
  );
})

export default App;
