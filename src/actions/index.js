// {
//     type:'ADD_MOVIES',
//     Movies:[m1,m2,m3]
// }
// {
//     type:'decrease counter',
//     movies:[]
// }
export const ADD_MOVIES='ADD_MOVIES'
export function addMovies(Movies)
{
return{
    type:ADD_MOVIES,
    Movies:Movies
}
}