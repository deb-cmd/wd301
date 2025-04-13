import React from 'react';
import { Outlet } from 'react-router-dom';

// Placeholder for a Header or other persistent UI elements
const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    {/* Replace with your actual Header content */}
    <h1 className="text-xl">Smarter Tasks</h1>
  </header>
);

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        {/* Child routes will render here */}
        <Outlet />
      </main>
      {/* You could also add a Footer here */}
    </div>
  );
};

export default Layout;
