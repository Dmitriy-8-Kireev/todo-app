import React from 'react';

import TodoListItem from '../TodoListItem';

const TodoList = ({ items }) => {
  const listItems = items.map(item => {
    const { id, ...items } = item;
    return (
      <li key={id}>
        <TodoListItem {...items} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};

export default TodoList;
