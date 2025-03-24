import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './types';

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    // Adds new task to the beginning of the tasks array
    setTasks(prevTasks => [task, ...prevTasks]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
