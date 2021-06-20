import React, {createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers'
// const logger=function({dispatch,getState})
// {
//   return function(next)
//   {
//     return function (action)
//     {
//       //middle ware code
//       console.log('ACTION TYPE =',action.type)
//       next(action);
//     }
//   }
// }
//this is the second way of witting middleware
const logger=({dispatch,getState})=>(next)=>(action)=>{
  //middle ware code
  if(typeof action!=='function')
  console.log("ACTION TYPE =",action.type)
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action ==='function')
//   {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
const store=createStore(rootReducer,applyMiddleware(logger,thunk))
// console.log('state',store.getState())
// store.dispatch({
//   type:'ADD_MOVIES',
//   Movies:[{name:'superman'}]
// })
// console.log('state',store.getState())
export const storeContext=createContext()
console.log('storeContext',storeContext)
class Provider extends React.Component
{
render()
{
  const{store}=this.props
  return (<storeContext.Provider value={store}>
    {this.props.children}
  </storeContext.Provider>)
}
}
ReactDOM.render(
 <Provider store={store}>
     <App />
 </Provider>,
  document.getElementById('root')
);

