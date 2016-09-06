import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { removeTodo, toggleTodo } from '../../actions';

class Todo extends Component {

  render() {

    const { dispatch, id, text, isCompleted } = this.props;

    let classToggle = 'btn btn-sm btn-primary';
    let classTask   = 'alert alert-info';
    if (isCompleted) {
      classToggle = 'btn btn-sm btn-success';
      classTask   = 'alert alert-success';
    };

    return (
      <li className = 'list-group'>

        {/* Remove task button */}
        &nbsp;
        <button
          onClick = {(e) => dispatch(removeTodo(id))}
          className = 'btn btn-sm btn-danger'
          >
          Delete
        </button>

        {/* Toogle task button */}
        &nbsp;
        <button
          onClick = {(e) => dispatch(toggleTodo(id))}
          className = {classToggle}
          >
          Toggle
        </button>

        {/* The description of the task */}
        &nbsp;
        <div className = {classTask}>
          {text}
        </div>

      </li>
    );
  };
}

//Make it reusable
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
};
Todo.defaultProps = { isCompleted: false };

export default connect()(Todo);
