import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../../actions/actions';

import Todo from './Todo.jsx';

class TodoList extends Component {

  render() {

    const { dispatch } = this.props;

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
              onRemoveClick = {id => dispatch(removeTodo(id))}
              onToggleClick = {id => dispatch(toggleTodo(id))}
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

/*
 * Auxiliar function for apply the visibility
 ***/
const applyFilter = (
  todos,
  filter
) => {
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
  };
};

const mapStateToProps = (state) => {
  return {
    todoList: applyFilter(state.todoList, state.filter)
  };
};

export default connect(mapStateToProps)(TodoList);
