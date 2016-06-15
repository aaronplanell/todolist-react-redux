import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeTodo, toggleTodo } from '../../../actions'

import Todo from './Todo'

export default class TodoList extends Component {
   render() {
     var ulStyle = {
       listStyleType: 'none',
       margin: 5,
       padding: 5
     };
      return (
        <div>
          <ul style={ulStyle}>
            {this.props.todos.map(todo =>
               <Todo
                 onRemoveClick = {id => this.props.dispatch(removeTodo(id))}
                 onToggleClick = {id => this.props.dispatch(toggleTodo(id))}
                 key = {todo.id}
                 {...todo}
               />
            )}
          </ul>
       </div>
      )
   }
}
