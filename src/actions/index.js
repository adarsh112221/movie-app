// {
//     type:'ADD_MOVIES',
//     Movies:[m1,m2,m3]
// }
// {
//     type:'decrease counter',
//     movies:[]
// }
export const ADD_MOVIES='ADD_MOVIES'
export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE'
export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE'
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT'
export function addMovies(movies)
{
return{
    type:ADD_MOVIES,
    movies:movies
}
}
export function addFavourite(movie)
{
    return{
    type:ADD_TO_FAVOURITE,
    movie
    }

}
export function removeFromFavourite(movie)
{
    return{
        type:REMOVE_FROM_FAVOURITE,
        movie
    }
}
export function setShowFavourite(val)
{
    return{
        type:SET_SHOW_FAVOURITE,
        val
    }
}
export function addMoviesToList(movie)
{ return{
    type:ADD_MOVIE_TO_LIST,
    movie
    }
}
export function handleMovieSearch(movie){
//now this should be responsable for getting the data from the url
    const url=`http://www.omdbapi.com/?t=${movie}&apikey=3ca5df7`;
    return function(dispatch)
    {
    fetch(url).then(response=>response.json()).then(movie=>{console.log('movie',movie);
    // dispatch an action
     dispatch(addMovieSearchResult(movie))
      })
    }
}
export function addMovieSearchResult(movie)
{
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}
