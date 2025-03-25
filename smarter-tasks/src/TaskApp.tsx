// src/TaskApp.tsx
import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './types';
import useLocalStorage from './hooks/useLocalStorage';

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;