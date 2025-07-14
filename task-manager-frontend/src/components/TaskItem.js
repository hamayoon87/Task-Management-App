import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const toggleComplete = async () => {
    await axios.patch(`http://localhost:5001/tasks/${task._id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5001/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={toggleComplete}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
