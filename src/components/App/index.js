import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

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

function mapStateToProps(state) {
  const todoList = state.todoList;
   return {
      todoList: state.todoList
   }
}

export default connect(mapStateToProps)(App)
