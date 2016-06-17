import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../../actions/actions';

import Todo from './Todo.jsx';

export default class TodoList extends Component {

  render() {

    var inlineStyle = {
      listStyleType: 'none',
      margin: 5,
      padding: 5
    };

    return (
      <div>
        <ul style={inlineStyle}>
          {this.props.todoList.map(todo =>
            <Todo
              onRemoveClick = {id => this.props.dispatch(removeTodo(id))}
              onToggleClick = {id => this.props.dispatch(toggleTodo(id))}
              key = {todo.id}
              {...todo}
              />
          )}
        </ul>
      </div>
    );
  };
};

//Make it reusable
TodoList.propTypes = {
  todoList:
  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })
    .isRequired)
    .isRequired
  };

  TodoList.defaultProps = { todoList: [] };
