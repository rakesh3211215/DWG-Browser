import { Routes, Route } from "react-router-dom";
import AdminPanel from "./components/TreeView/AdminPanel";
import FileUpload from "./components/FileUpload";
import Alert from "./components/Alert/Alert";
import { AlertProvider } from "./components/Alert/AlertContext";

function App() {
  return (
    <AlertProvider>
      <Alert />

      <div className="min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Routes>
          <Route path="/" element={<AdminPanel />}>
            <Route index element={<FileUpload />} />
            {/* You can add more child routes here */}
          </Route>
        </Routes>
      </div>
    </AlertProvider>
  );
}

export default App;
