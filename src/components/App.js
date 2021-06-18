import React from 'react'
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../actions';
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
  isFavourite=(movie)=>
  { const{movies}=this.props.store.getState();
    const {favourites}=movies;
    const index=favourites.indexOf(movie)
    if(index!==-1)
    {
      return true;
    }
    else{
      return false;
    }
  }
  onChangeTab=(val)=>
  { 
this.props.store.dispatch(setShowFavourite(val))
  }
render()
{  const{movies,search}=this.props.store.getState();
    console.log("render",this.props.store.getState())
  const {list,favourites,showFavourite}=movies;
  const displayMovies=showFavourite? favourites:list
  return (
    <div className="App">
    <Navbar search={search} dispatch={this.props.store.dispatch}/>
    <div className="main">
      <div className="tabs">
        <div className={`tab ${showFavourite?'': 'active-tabs' }`} onClick={()=>this.onChangeTab(false)}>Movies</div>
        <div className={`tab ${showFavourite?'active-tabs':'' }`} onClick={()=>this.onChangeTab(true)} >Favourites</div>
      </div>
      <div className="list">
      
{displayMovies.map((movie,index)=><MovieCard  isfavourite={this.isFavourite(movie)} dispatch={this.props.store.dispatch} key={index} movie={movie}/>)}
{displayMovies.length===0?<div className="no-movies">no movies to display</div>:null}

      </div>
    </div>
    </div>
  );
}
}
export default App;
