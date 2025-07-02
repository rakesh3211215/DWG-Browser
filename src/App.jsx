import { Routes, Route, Navigate } from "react-router-dom";
import AdminPanel from "./components/TreeView/AdminPanel";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Routes>
        <Route path="/" element={<AdminPanel />}>
          {/* <Route index element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pricing-menu" element={<PricingMenu />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
