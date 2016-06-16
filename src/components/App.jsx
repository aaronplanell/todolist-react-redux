import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

import AddTodo from './todo/AddTodo.jsx'
import TodoList from './todo/TodoList.jsx'

class App extends Component {
   render() {
      const { dispatch, todoList } = this.props

      return (
         <div>

            <AddTodo
               onAddClick = {text =>
               dispatch(addTodo(text))}
            />
            <TodoList
              todoList = {todoList}
              dispatch = {dispatch}
              />

         </div>
      )
   }
}

function select(state) {
   return {
      todoList: state.todoList
   }
}

export default connect(select)(App)
