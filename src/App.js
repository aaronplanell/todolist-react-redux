import React, { Component } from 'react';

import AddTodo from './todoList/components/AddTodo.js';
import TodoList from './todoList/components/TodoList.js';
import Filter from './filter/components/Filter.js';

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

export default App;
