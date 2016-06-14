import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
   render() {
      let labelToggle = 'Toggle';
      if (this.props.isCompleted) labelToggle = 'Done';
      return (
         <li>

           <button
             onClick = {(e) => this.onRemoveClick(this.props.id)}
             >
              Delete
           </button>

           &nbsp;
           <button
             onClick = {(e) => this.onToggleClick(this.props.id)}
             >
              {labelToggle}
           </button>

           &nbsp;
           {this.props.text}

         </li>
      )
   }

    onRemoveClick(id) {
       this.props.onRemoveClick(id);
    }

    onToggleClick(id) {
       this.props.onToggleClick(id);
    }
}
