import React from 'react'
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
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
    store.dispatch({
      type:'ADD_MOVIES',
      Movies:data
    })
    console.log("store",store.getState());
  }
  render()
  {
    console.log("render")
  const movie=this.props.store.getState();
  return (
    <div className="App">
    <Navbar/>
    <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favrouits</div>
      </div>
      <div className="list">
{movie.map((movie,index)=><MovieCard key={index} movie={movie}/>)}
      </div>
    </div>
    </div>
  );
}
}
export default App;
