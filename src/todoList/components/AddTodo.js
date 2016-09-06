import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

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
          onClick = {(e) => {
            const { dispatch } = this.props;
            const node = this.refs.input;
            const text = node.value.trim();
            if (text !== '') {
              dispatch(addTodo(text));
            }
            node.value = '';
          }}
          className = 'btn btn-sm btn-default'
          >
          Add
        </button>
      </div>
    )
  };

};

export default connect()(AddTodo);
