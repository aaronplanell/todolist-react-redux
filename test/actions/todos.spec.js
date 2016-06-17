import expect from 'expect'

import { addTodo, removeTodo, toggleTodo } from '../../src/todoList/actions';
import { setFilter } from '../../src/filter/actions';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('removeTodo should create REMOVE_TODO action', () => {
    expect(removeTodo(1)).toEqual({
      type: 'REMOVE_TODO',
      id: 1
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('setFilter should create SET_FILTER action', () => {
    expect(setFilter('active')).toEqual({
      type: 'SET_FILTER',
      filter: 'active'
    })
  })

})
