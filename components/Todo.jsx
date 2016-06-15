import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
   render() {

      let classToggle = 'btn btn-sm btn-primary';
      let classTask   = 'alert alert-info';
      if (this.props.isCompleted) {
        classToggle = 'btn btn-sm btn-success';
        classTask   = 'alert alert-success';
      }

      return (
         <li className = 'list-group'>

           <button
             onClick = {(e) => this.onRemoveClick(this.props.id)}
             className = 'btn btn-sm btn-danger'
             >
              Delete
           </button>

           &nbsp;
           <button
             onClick = {(e) => this.onToggleClick(this.props.id)}
             className = {classToggle}
             >
              Toggle
           </button>

           &nbsp;
           <div className = {classTask}>
             {this.props.text}
           </div>

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
