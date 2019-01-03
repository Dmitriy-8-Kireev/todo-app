import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ items, onDelete, onImportant, onDone }) => {
  const listItems = items.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onImportant={() => onImportant(id)}
          onDone={() => onDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{listItems}</ul>;
};

export default TodoList;

// Компонент спроектирован так, чтобы он отвечал только за отображения списка,
// Данные получает через свойства items
