import { combineReducers } from 'redux';
import { todoList } from './todoList/reducers/todoList';
import { filter } from './filter/reducers/filter';

const root = combineReducers({
  todoList,
  filter
})

export default root;
