import React from 'react'
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../actions';
import { connect } from 'react-redux';
class  App extends React.Component {
  componentDidMount()
  {
    //make an api call
    //dispatch an action saying add this to  state
    // const{store}=this.props

    // this.props.subscribe(()=>{
    //   console.log("UPDATE");
    //   this.forceUpdate();
    // });
    this.props.dispatch(addMovies(data))
    // console.log("store",store.getState());
  }
  isFavourite=(movie)=>
  { const{movies}=this.props;
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
this.props.dispatch(setShowFavourite(val))
  }
render()
{  const{movies,search}=this.props;
    console.log("render",this.props)
  const {list,favourites,showFavourite}=movies;
  const displayMovies=showFavourite? favourites:list
  return (
    <div className="App">
    <Navbar search={search}/>
    <div className="main">
      <div className="tabs">
        <div className={`tab ${showFavourite?'': 'active-tabs' }`} onClick={()=>this.onChangeTab(false)}>Movies</div>
        <div className={`tab ${showFavourite?'active-tabs':'' }`} onClick={()=>this.onChangeTab(true)} >Favourites</div>
      </div>
      <div className="list">
      
{displayMovies.map((movie,index)=><MovieCard  isfavourite={this.isFavourite(movie)} dispatch={this.props.dispatch} key={index} movie={movie}/>)}
{displayMovies.length===0?<div className="no-movies">no movies to display</div>:null}

      </div>
    </div>
    </div>
  );
}
}
// class AppWrapper extends React.Component
// {
//   render()
//   {
//     return(
//     <storeContext.Consumer>
//       {(store)=> <App store={store}/>}
//     </storeContext.Consumer>

//     )
//   }
// }

function callback(state) {
  console.log('callback',state)
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;

