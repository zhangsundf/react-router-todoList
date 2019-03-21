import { combineReducers } from 'redux'
import todoListReducer from './todoListReducer'
import inputReducer from './inputReducer'

export default combineReducers({
  todoListReducer,
  inputReducer
})