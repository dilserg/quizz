import {combineReducers, createStore} from 'redux';
import quizzesReducer from './quizzesReducer';

const reducers = combineReducers({
  quizzes:quizzesReducer,
})

export const store = createStore(reducers)
window.store = store
