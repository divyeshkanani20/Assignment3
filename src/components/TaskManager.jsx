// src/components/TaskManager.js
import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './TaskManager.css';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, name: 'Sample Task 1', completed: false },
        { id: 2, name: 'Sample Task 2', completed: true },
      ]
    };
  }

  addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    this.setState((prevState) => ({
      tasks: [newTask, ...prevState.tasks]
    }));
  };

  toggleTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} toggleTask={this.toggleTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default TaskManager;
