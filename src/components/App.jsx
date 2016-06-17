import React, { Component } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

import AddTodo from './todo/AddTodo.jsx';
import TodoList from './todo/TodoList.jsx';
import Filter from './filter/Filter.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <TodoList/>
        <Filter/>
      </div>
    );
  };
};

export default connect()(App);
