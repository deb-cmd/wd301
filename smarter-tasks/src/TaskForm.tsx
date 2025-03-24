import React, { useState } from 'react';
import { Task } from './types';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate that title and due date are not empty
    if (!title.trim() || !dueDate.trim()) {
      return;
    }
    const newTask: Task = {
      id: Date.now(), // simple unique id generation using timestamp
      title,
      description,
      dueDate
    };
    onAddTask(newTask);
    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todoTitle">Title:</label>
        <input
          id="todoTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="todoDescription">Description:</label>
        <input
          id="todoDescription"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="todoDueDate">Due Date:</label>
        <input
          id="todoDueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button id="addTaskButton" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
