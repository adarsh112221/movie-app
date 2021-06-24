import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addMoviesToList,handleMovieSearch} from '../actions'
class  Navbar extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={

      searchText:''
    };
  }
  handleAddMovie=(movie)=>
  {
    this.props.dispatch(addMoviesToList(movie));
    
    this.setState({
      showSearchResults:false
    })
  }
  handleSearch=()=>{
    const{searchText}=this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  }
  handleChange=(e)=>{
  this.setState({
  searchText:e.target.value
})
  }
render(){
  const{result: movie,showSearchResults}=this.props.search;
  return (
    <div className="nav">
        <div className="search-container">
            <input onChange={this.handleChange}/>
            <button id="search-btn" onClick={this.handleSearch}>Search</button>
            {showSearchResults&&<div className="search-results"><div className="search-result"><img src={movie.Poster} alt="search-pic"/>
            <div className="movie-info">
              <span>{movie.Title}</span>
            <button onClick={()=>this.handleAddMovie(movie)}>Add To Movies</button></div></div></div>} 
        </div>
    </div>
  );
}
}
// class NavbarWrapper extends React.Component
// {
//   render()
//   {
//     return(
//       <storeContext.Consumer>
//         {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
//       </storeContext.Consumer>
//     )
//   }
// }
function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);
