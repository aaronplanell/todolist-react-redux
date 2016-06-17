import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {

  render() {

    const { dispatch } = this.props;

    let classToggle = 'btn btn-sm btn-primary';
    let classTask   = 'alert alert-info';
    if (this.props.isCompleted) {
      classToggle = 'btn btn-sm btn-success';
      classTask   = 'alert alert-success';
    };

    return (
      <li className = 'list-group'>

        {/* Remove task button */}
        &nbsp;
        <button
          onClick = {(e) => this.onRemoveClick(this.props.id)}
          className = 'btn btn-sm btn-danger'
          >
          Delete
        </button>

        {/* Toogle task button */}
        &nbsp;
        <button
          onClick = {(e) => this.onToggleClick(this.props.id)}
          className = {classToggle}
          >
          Toggle
        </button>

        {/* The description of the task */}
        &nbsp;
        <div className = {classTask}>
          {this.props.text}
        </div>

      </li>
    );
  };

  onRemoveClick(id) {
    this.props.onRemoveClick(id);
  };

  onToggleClick(id) {
    this.props.onToggleClick(id);
  };
}

//Make it reusable
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired
};

Todo.defaultProps = { isCompleted: false };

export default connect()(Todo);
