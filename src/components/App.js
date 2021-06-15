import React from 'react'
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favrouits</div>
      </div>
      <div className="list">
{data.map((movie,index)=><MovieCard key={index} movie={movie}/>)}
      </div>
    </div>
    </div>
  );
}

export default App;
