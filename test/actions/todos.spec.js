import expect from 'expect'
import * as actions from '../../src/actions/actions'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('removeTodo should create REMOVE_TODO action', () => {
    expect(actions.removeTodo(1)).toEqual({
      type: 'REMOVE_TODO',
      id: 1
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('setFilter should create SET_FILTER action', () => {
    expect(actions.setFilter('active')).toEqual({
      type: 'SET_FILTER',
      filter: 'active'
    })
  })

})
