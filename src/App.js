
import { CssBaseline } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieInformation from './components/MovieInformation/MovieInformation';
import Actors from './components/Actors/Actors';
import Movies from './components/Movies/Movies';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <CssBaseline/>
      <main>
        <Routes>
          <Route exact path='/movie/:id'element={<MovieInformation/>}/>
          <Route exact path='/actors/:id'element={<Actors/>}/>
          <Route exact path='/' element={<Movies/>}/> 
          <Route exact path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
