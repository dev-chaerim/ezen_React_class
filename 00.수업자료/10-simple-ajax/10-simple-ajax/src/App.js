import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
import Professor from "./pages/Professor";
import Department from "./pages/Department";
import News from "./pages/News";

const App = () => {
  return (
    <div>
      <h1>09-Simple-Ajax</h1>
      <nav>
        <MenuLink to='/news'>뉴스목록</MenuLink>
        <MenuLink to='/department'>학과관리</MenuLink>
        <MenuLink to='/professor'>교수관리</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route path='/news' element={<News/>} />
        <Route path='/department' element={<Department/>} />
        <Route path='/professor' element={<Professor/>} />
      </Routes>
    </div>
  )
}

export default App;
