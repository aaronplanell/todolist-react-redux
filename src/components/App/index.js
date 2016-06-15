import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

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

function mapStateToProps(state) {
  const todos = state.todos;
   return {
      todos: state.todos
   }
}

export default connect(mapStateToProps)(App)
