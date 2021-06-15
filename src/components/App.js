import React from 'react'
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';
class  App extends React.Component {
  componentDidMount()
  {
    //make an api call
    //dispatch an action saying add this to  state
    const{store}=this.props

    store.subscribe(()=>{
      console.log("UPDATE");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data))
    console.log("store",store.getState());
  }
  render()
  {
    console.log("render",this.props.store.getState())
  const {list}=this.props.store.getState();
  return (
    <div className="App">
    <Navbar/>
    <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favrouits</div>
      </div>
      <div className="list">
{list.map((movie,index)=><MovieCard key={index} movie={movie}/>)}
      </div>
    </div>
    </div>
  );
}
}
export default App;
