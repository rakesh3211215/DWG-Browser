import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Desktop sidebar toggle
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false); // Mobile drawer toggle

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Topbar */}
      <Topbar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onMobileToggle={() => setIsMobileDrawerOpen(true)}
      />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar (desktop only) */}
        <div className="hidden md:block h-screen">
          <Sidebar isOpen={isSidebarOpen} />
        </div>

        {/* Drawer (mobile only) */}
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            {/* Sidebar content */}
            <div className="relative z-50">
              <Sidebar isOpen={true} />
            </div>
            {/* Overlay to close drawer */}
            <div
              className="fixed inset-0 bg-gray-500/60 bg-opacity-50 z-30"
              onClick={() => setIsMobileDrawerOpen(false)}
            ></div>
          </div>
        )}

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto sidebar-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
