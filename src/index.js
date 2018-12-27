import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

import './index.css';

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
        </div>
        <TodoList items={todoItem} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
