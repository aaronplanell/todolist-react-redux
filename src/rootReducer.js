import { combineReducers } from 'redux';
import { todoList } from './todoList/reducer';
import { filter } from './filter/reducer';

const root = combineReducers({
  todoList,
  filter
})

export default root;
