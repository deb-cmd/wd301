import React from 'react';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="TaskItem">
          <h3>{task.title} ({task.dueDate})</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
