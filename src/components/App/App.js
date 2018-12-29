import React from 'react';

import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

const todoItem = [
  { id: 1, label: 'Попить кофе', important: false, done: false },
  { id: 2, label: 'Изучить аспекты React', important: true, done: false },
  { id: 3, label: 'Написать 300 строчек кода', important: false, done: false }
];

const App = () => {
  return (
    <div>
      <div className="todo-app">
        <AppHeader />

        <div className="search-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList items={todoItem} />
      </div>
    </div>
  );
};
export default App;
