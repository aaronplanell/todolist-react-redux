import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
   render() {
      return (
         <li>
           <button
             onClick = {(e) => this.handleClick(this.props.id)}
             >
              x
           </button>
           &nbsp;
           {this.props.text}
         </li>
      )
   }

    handleClick(id) {
       this.props.onRemoveClick(id);
    }
}
