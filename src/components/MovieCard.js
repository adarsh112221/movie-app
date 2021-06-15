import React from 'react'

class  MovieCard extends React.Component {
    render(){
        const{movie}=this.props;
  return (
    <div className="movie-card">
        <div className="left">
            <img src={movie.Poster}></img>
        </div>
        <div className="right">
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
                <div className="rating">{movie.imdbRating}</div>
                <div className="favourite-btn">Favourite</div>
            </div>
        </div>
    
    </div> 
  );
}
}

export default MovieCard;
