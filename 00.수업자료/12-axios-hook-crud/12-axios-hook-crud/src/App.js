import { Routes, Route } from "react-router-dom";
import GradeAdd from "./pages/GradeAdd";
import GradeEdit from "./pages/GradeEdit";
import GradeList from "./pages/GradeList";

function App() {
  return (
    <div>
      <h1>12-Axios-Hook-CRUD</h1>

      <Routes>
        <Route path='/' exapt={true} element={<GradeList/>} />
        <Route path='/add' element={<GradeAdd/>} />
        <Route path='/edit/:id' element={<GradeEdit/>} />
      </Routes>
    </div>
  );
}

export default App;
