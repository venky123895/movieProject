import {combineReducers} from 'redux'
import { popularReducer } from './reducer'
import { movieTypesReducer } from './reducer'
import { movieOverViewReducer } from './reducer'
export const reducers=combineReducers({
popularReducer:popularReducer,
movieTypesReducer:movieTypesReducer,
movieOverViewReducer:movieOverViewReducer
})