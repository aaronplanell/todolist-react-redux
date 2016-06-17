import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {

  render() {

    var inlineStyle = {
      margin: 5,
      padding: 5
    };

    return (
      <div style={inlineStyle} className="form-group">

        {/* Show all button */}
        &nbsp;
        <button
          onClick = {(e) => this.handleClick(e, 'SHOW_ALL')}
          className = 'btn btn-sm btn-default'
          >
          Show all
        </button>

        {/* Show active button */}
        &nbsp;
        <button
          onClick = {(e) => this.handleClick(e, 'SHOW_ACTIVE')}
          className = 'btn btn-sm btn-default'
          >
          Show active
        </button>

        {/* Show completed button */}
        &nbsp;
        <button
          onClick = {(e) => this.handleClick(e, 'SHOW_COMPLETED')}
          className = 'btn btn-sm btn-default'
          >
          Show completed
        </button>
      </div>
    )
  }

  handleClick(e, filter) {
    this.props.onSetFilter(filter);
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(Filter);
