import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'

class App extends Component {
   render() {
      const { dispatch, todos } = this.props

      return (
         <div>

            <AddTodo
               onAddClick = {text =>
               dispatch(addTodo(text))}
            />
            <TodoList
              todos = {todos}
              dispatch = {dispatch}
              />

         </div>
      )
   }
}

function select(state) {
   return {
      todos: state.todos
   }
}

export default connect(select)(App)
