import React from 'react'
import { addFavourite, removeFromFavourite } from '../actions';

class MovieCard extends React.Component {
    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie))
    }
    handleUnFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourite(movie))
    }
    render() {
        const { movie } = this.props;
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
                        {this.props.isfavourite ? <div className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourite</div> : <div className="favourite-btn" onClick={this.handleFavouriteClick}>favourite</div>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieCard;
