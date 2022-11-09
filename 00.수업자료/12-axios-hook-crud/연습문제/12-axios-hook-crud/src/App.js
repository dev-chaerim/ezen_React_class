import {Routes, Route } from "react-router-dom";
import ProfAdd from "./pages/ProfAdd";
import ProfEdit from "./pages/ProfEdit";
import ProfList from "./pages/ProfList";

function App() {
  return (
    <div>
      <h2>practice</h2>
      <Routes>
        <Route path='/' exapt={true} element = {<ProfList/>}/>
        <Route path='/add' element = {<ProfAdd/>}/>
        <Route path='/edit/:id'  element = {<ProfEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
