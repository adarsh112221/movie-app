import React from 'react';
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
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

