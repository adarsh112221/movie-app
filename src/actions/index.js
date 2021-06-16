// {
//     type:'ADD_MOVIES',
//     Movies:[m1,m2,m3]
// }
// {
//     type:'decrease counter',
//     movies:[]
// }
export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITE='ADD_FAVOURITE'
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
    type:ADD_FAVOURITE,
    movie
    }

}