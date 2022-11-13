import React, {memo} from 'react';
import { Routes, Route } from "react-router-dom";
import MenuLink from './components/MenuLink';
import Counter from './pages/Counter';
import Department from './pages/Department';
import ImageSearch from './pages/ImageSearch';
import MovieRank from './pages/MovieRank';
import News from './pages/News';


const App = memo(()=>{
  return (
    <div>
      <h1>13-redux</h1>
      <nav>
        <MenuLink to='/counter'>Counter</MenuLink>
        <MenuLink to='/department'>Department</MenuLink>
        <MenuLink to='/news'>News</MenuLink>
        <MenuLink to='/movie_rank'>MovieRank</MenuLink>
        <MenuLink to='/image_search'>ImageSearch</MenuLink>
      </nav>
      <hr/>
      <Routes>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/department' element={<Department/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/movie_rank' element={<MovieRank/>}></Route>
        <Route path='/image_search' element={<ImageSearch/>}></Route>
      </Routes>
    </div>
  )
})

export default App;
