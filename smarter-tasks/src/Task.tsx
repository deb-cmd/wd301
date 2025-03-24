import React from 'react';
import { Task } from './types';

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="TaskItem">
      <h3>{task.title} ({task.dueDate})</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskComponent;
