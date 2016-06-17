import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {

  render() {

    var inlineStyle = {
      margin: 5,
      padding: 5
    };

    return (
      <div style={inlineStyle} className="form-group">
        <label for="comment">Insert a new task: &nbsp;</label>
        <input type = 'text' ref = 'input'
          className = 'form-inline'
          />
        &nbsp;
        <button
          onClick = {(e) => this.handleClick(e)}
          className = 'btn btn-sm btn-default'
          >
          Add
        </button>
      </div>
    )
  };

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    if (text !== '') this.props.onAddClick(text);
    node.value = '';
  };
};

//Make it reusable
AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default connect()(AddTodo);
