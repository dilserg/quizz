import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
  main:null
})

export const store = createStore(reducers)
