import React, { Component } from 'react';

import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

export default class todoItem extends Component {
  state = {
    todoItem: [
      { id: 1, label: 'Попить кофе', important: false, done: false },
      { id: 2, label: 'Изучить аспекты React', important: true, done: false },
      {
        id: 3,
        label: 'Написать 300 строчек кода',
        important: false,
        done: false
      }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoItem }) => {
      const idx = todoItem.findIndex(el => el.id === id);
      const newArr = [...todoItem.slice(0, idx), ...todoItem.slice(idx + 1)];
      return {
        todoItem: newArr
      };
    });
  };
  render() {
    return (
      <div>
        <div className="todo-app">
          <AppHeader done={1} toDo={3} />

          <div className="search-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList items={this.state.todoItem} onDelete={this.deleteItem} />
        </div>
      </div>
    );
  }
}
