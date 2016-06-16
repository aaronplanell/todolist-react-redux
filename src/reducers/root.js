import { combineReducers } from 'redux'
import { todoList } from './todo/todoList'

const root = combineReducers({
   todoList
})

export default root
