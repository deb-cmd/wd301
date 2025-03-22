import React from 'react';
import './TaskCard.css';

// Define the interface for the props
interface TaskCardProps {
  title: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title }) => {
  return (
    <div className="TaskItem">
      <h2>{title}</h2>
      <p>Completed on: due date...</p>
      <p>Assignee: name...</p>
    </div>
  );
};

export default TaskCard;