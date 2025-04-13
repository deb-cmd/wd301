import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskApp from './TaskApp';
import NotFound from './pages/Notfound';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TaskApp />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
