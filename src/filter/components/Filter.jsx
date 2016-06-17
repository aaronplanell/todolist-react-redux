import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions';

class Filter extends Component {

  render() {

    const { dispatch, filter } = this.props;

    var inlineStyle = {
      margin: 5,
      padding: 5
    };

    var classNameButtonAll = 'btn btn-sm btn-default';
    var classNameButtonActive = 'btn btn-sm btn-default';
    var classNameButtonCompleted = 'btn btn-sm btn-default';
    if(filter === 'SHOW_ALL') classNameButtonAll = 'btn btn-sm btn-warning';
    if(filter === 'SHOW_ACTIVE') classNameButtonActive = 'btn btn-sm btn-warning';
    if(filter === 'SHOW_COMPLETED') classNameButtonCompleted = 'btn btn-sm btn-warning';

    return (
      <div style={inlineStyle} className="form-group">

        {/* Show all button */}
        &nbsp;
        <button
          onClick = {(e) => dispatch(setFilter('SHOW_ALL'))}
          className = {classNameButtonAll}
          >
          Show all
        </button>

        {/* Show active button */}
        &nbsp;
        <button
          onClick = {(e) => dispatch(setFilter('SHOW_ACTIVE'))}
          className = {classNameButtonActive}
          >
          Show active
        </button>

        {/* Show completed button */}
        &nbsp;
        <button
          onClick = {(e) => dispatch(setFilter('SHOW_COMPLETED'))}
          className = {classNameButtonCompleted}
          >
          Show completed
        </button>
      </div>
    )
  }
}

//Make it reusable
Filter.propTypes = {
  filter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(Filter);
