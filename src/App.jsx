import React, { Component } from 'react';

import AddTodo from './todoList/components/AddTodo.jsx';
import TodoList from './todoList/components/TodoList.jsx';
import Filter from './filter/components/Filter.jsx';

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
