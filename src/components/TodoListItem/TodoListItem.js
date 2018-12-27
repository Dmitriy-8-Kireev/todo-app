import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'green',
    fontWeight: important ? 'bold' : 'normal'
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      ;
    </span>
  );
};

export default TodoListItem;
