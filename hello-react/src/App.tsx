import React from "react";
import TaskCard from "./TaskCard";

// Assuming TaskCard component accepts a 'title' prop of type string
interface TaskCardProps {
  title: string;
}

function App() {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Build the website with static content" />
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="Design the mockup" />
      </div>
    </div>
  );
}

export default App;