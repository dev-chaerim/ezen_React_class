import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
import Calc from "./pages/Calc";
import PrintStar from "./pages/PrintStar";

function App() {
  return (
    <div>
      <h1>연습문제 07</h1>
      <nav>
        <MenuLink to='/printStar'>PrintStar</MenuLink>
        <MenuLink to='/Calc'>Calc</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path='/printStar' element = {<PrintStar/>}/>
        <Route path='/calc' element = {<Calc/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
