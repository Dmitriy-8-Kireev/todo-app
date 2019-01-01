import React from 'react';

import './AddItemForm.css';

const AddItemForm = ({ onAdd }) => {
  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Lala-Lend')}
      >
        Добавить
      </button>
    </div>
  );
};

export default AddItemForm;
