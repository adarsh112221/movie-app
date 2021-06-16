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
export function addMovies(Movies)
{
return{
    type:ADD_MOVIES,
    Movies:Movies
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
