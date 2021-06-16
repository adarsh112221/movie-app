import { ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE } from "../actions";
 const initialMovieState={
     list:[],
     favourites:[],
     showFavourite:false
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
        case ADD_TO_FAVOURITE:
            return {
               ...state,
               favourites:[action.movie,...state.favourites]
            }
            case REMOVE_FROM_FAVOURITE:
                const filteredArray=state.favourites.filter(
                    movie=>movie.Title!=action.movie.Title
                );
                return{
                    ...state,
                    favrouite:filteredArray
                }
                case SET_SHOW_FAVOURITE:
                {
                return{
                    ...state,
                    showFavourite:action.val
                }

                } 
            default:
                return state;
            
    }
    
}