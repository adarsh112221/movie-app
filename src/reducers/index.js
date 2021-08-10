import { combineReducers } from 'redux';
import
    {
        ADD_MOVIES,
        ADD_TO_FAVOURITES,
        REMOVE_FROM_FAVOURITES,
        SET_SHOW_FAVOURITES,
        ADD_SEARCH_RESULT,
        ADD_MOVIE_TO_LIST
    } from '../actions'

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
}

export function movies(state = initialMoviesState, action)
{
    switch (action.type)
    {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filtered_array = state.favourites.filter(movie => movie.Title !== action.movie.Title);
            return {
                ...state,
                favourites: filtered_array
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;

    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false
};
export function search(state = initialSearchState, action)
{
    switch (action.type)
    {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
}

/* everytime we dispatch an action both of the child reducers will be called because we have passed the root reducer in our create store method
and this root reducer will be called everytime i dispatch an action , and hence movies and search will be called separately... */


//ROOT REDUCER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const initialRootState = {
//     movies: initialMoviesState,
//     search:initialSearchState
// }

// export default function rootReducer(state=initialRootState, action)
// {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    /* movies:movies,
    search:search 
    we can use the short hand to write this too.*/
    movies,
    search
})