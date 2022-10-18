import React from "react";
import { Link , Routes, Route} from "react-router-dom";
import Weather from "./Weather";

function App() {
  
  return (
    <div>
      <h2>주간날씨</h2>
      <hr />

      <nav>
        <Link to="/Weather/mon">월</Link>&nbsp;|&nbsp;
        <Link to="/Weather/tue">화</Link>&nbsp;|&nbsp;
        <Link to="/Weather/wed">수</Link>&nbsp;|&nbsp;
        <Link to="/Weather/thu">목</Link>&nbsp;|&nbsp;
        <Link to="/Weather/fri">금</Link>&nbsp;|&nbsp;
        <Link to="/Weather/sat">토</Link>&nbsp;|&nbsp;
        <Link to="/Weather/sun">일</Link>
      </nav>

      <Routes>
        <Route path="/Weather/:day" element={<Weather/>} exact={true} />
      </Routes>

    </div>
  );
}

export default App;
