
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/home/Home';
import MovieDetails from './Components/MovieDetails';
import MovieOverview from './Components/MovieOverview';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieOverview/>}/>
        <Route path='/movies/:type' element={<MovieDetails/>} />
        <Route path='/*' element={<h1 style={{color:'white'}}>Error</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
