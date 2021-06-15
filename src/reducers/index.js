import { ADD_MOVIES } from "../actions";
 const initialMovieState={
     list:[],
     favrouite:[]
 }
export default function Movies(state=initialMovieState,action)
{
    if(action.type===ADD_MOVIES)
    {
        return {
             ...state,list:action.Movies
        }
    }
    return state;
}