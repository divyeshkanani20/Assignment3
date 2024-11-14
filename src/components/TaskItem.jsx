// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className={task.completed ? 'checked' : ''}>{task.name}</span>
      </label>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        <i className="fa fa-times"></i>
      </button>
    </li>
  );
};

export default TaskItem;
