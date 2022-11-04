import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Titanic from './pages/Titanic';
import MenuLink from './components/MenuLink';
import TrafficAcc from "./pages/TrafficAcc";


function App() {
  return (
    <div>
      <h1>11-Axios-Hooks</h1>
      <nav>
        <MenuLink to='/titanic'>Titanic</MenuLink>
        <MenuLink to='/traffic'>TrafficAcc</MenuLink>
      </nav>
      <hr/>
      <Routes>
        <Route path='/titanic' element={<Titanic/>}/>
        <Route path='/traffic' element={<TrafficAcc/>}/>
      </Routes>
    </div>
  );
}

export default App;
