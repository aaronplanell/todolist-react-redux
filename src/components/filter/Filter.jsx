import React, { Component, PropTypes } from 'react'

export default class Filter extends Component {
   render() {
     var divStyle = {
       margin: 5,
       padding: 5
     };
      return (
         <div style={divStyle} className="form-group">
            &nbsp;
            <button
              onClick = {(e) => this.handleClick(e, 'SHOW_ALL')}
              className = 'btn btn-sm btn-default'
              >
               Show all
            </button>
            &nbsp;
            <button
              onClick = {(e) => this.handleClick(e, 'SHOW_ACTIVE')}
              className = 'btn btn-sm btn-default'
              >
               Show active
            </button>
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
