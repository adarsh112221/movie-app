function Movies(state=[],action)
{
    if(action.type==='ADD_MOVIES')
    {
        return action.Movies
    }
    return state;
}