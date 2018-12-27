import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ items }) => {
  const listItems = items.map(item => {
    const { id, ...items } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...items} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{listItems}</ul>;
};

export default TodoList;

// Компонент спроектирован так, чтобы он отвечал для отображения списка,
// Данные получает через свойства items
