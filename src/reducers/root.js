import { combineReducers } from 'redux'
import { todoList } from './todo/todoList'
import { filter } from './filter/filter'

const root = combineReducers({
   todoList,
   filter
})

export default root
