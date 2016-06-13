import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions/actions'

import Todo from './Todo.jsx'

export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map(todo =>
               <Todo
                 onRemoveClick = {id =>
                 this.props.dispatch(removeTodo(id))}
               key = {todo.id}
               {...todo}
               />
            )}
         </ul>
      )
   }
}
