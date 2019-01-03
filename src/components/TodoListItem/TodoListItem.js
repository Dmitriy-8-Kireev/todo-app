import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({
  done,
  important,
  label,
  onDelete,
  onDone,
  onImportant
}) => {
  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onDone}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" onClick={onDelete} />
      </button>
    </span>
  );
};

export default TodoListItem;
