import React, { Component } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo, setFilter } from '../actions/actions';

import AddTodo from './todo/AddTodo.jsx';
import TodoList from './todo/TodoList.jsx';
import Filter from './filter/Filter.jsx';

class App extends Component {

  render() {

    const { dispatch, todoList, filter } = this.props;

    return (
      <div>

        <AddTodo
          onAddClick = {text => dispatch(addTodo(text))}
        />

        <TodoList
          todoList = {todoList}
        />

        <Filter
          onSetFilter = {filter => dispatch(setFilter(filter))}
        />

      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(App);
