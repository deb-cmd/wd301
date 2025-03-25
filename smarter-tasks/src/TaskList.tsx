// src/TaskList.tsx
import React from 'react';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="TaskItem">
          <h3>
            {task.title} ({task.dueDate})
          </h3>
          <p>{task.description}</p>
          <button
            className="deleteTaskButton"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;