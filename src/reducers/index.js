import { ADD_MOVIES,ADD_FAVOURITE } from "../actions";
 const initialMovieState={
     list:[],
     favourites:[]
 }
export default function Movies(state=initialMovieState,action)
{
    switch(action.type)
    {
        case ADD_MOVIES:
        return {
           ...state,
           list:action.Movies
        }
        case ADD_FAVOURITE:
            return {
               ...state,
               favourites:[action.movie,...state.favourites]
            }
            default:
                return state;
            
    }
    
}