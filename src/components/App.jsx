import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, setFilter } from '../actions/actions'

import AddTodo from './todo/AddTodo.jsx'
import TodoList from './todo/TodoList.jsx'
import Filter from './filter/Filter.jsx'

class App extends Component {


  /*
   * Auxiliar function for apply the visibility
   ***/
  applyFilter (
      todos,
      filter
    ) {
      switch (filter) {
        case 'SHOW_ALL':
          return todos;
        case 'SHOW_ACTIVE':
          return todos.filter(
            t => !t.isCompleted
          );
        case 'SHOW_COMPLETED':
          return todos.filter(
            t => t.isCompleted
          );
        default:
          return todos;
      }
    }

   render() {
      const { dispatch, todoList, filter } = this.props

      return (
        <div>

            <AddTodo
               onAddClick = {text =>
               dispatch(addTodo(text))}
            />
            <TodoList
              todoList = {this.applyFilter(todoList, filter)}
              dispatch = {dispatch}
              />
            <Filter
               onSetFilter = {filter =>
               dispatch(setFilter(filter))}
            />

        </div>
      )
   }
}

function select(state) {
   return {
      todoList: state.todoList,
      filter: state.filter
   }
}

export default connect(select)(App)
