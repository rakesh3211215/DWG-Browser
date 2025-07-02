import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // visible by default

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Topbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 overflow-y-auto sidebar-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
