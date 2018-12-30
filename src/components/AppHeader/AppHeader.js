import React from 'react';

import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Mой список дел</h1>
      <h2>
        {toDo} задумано, {done} выполнено
      </h2>
    </div>
  );
};

export default AppHeader;
