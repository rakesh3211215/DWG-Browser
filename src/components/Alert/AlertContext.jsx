import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    type: "",
    message: "",
    visible: false,
  });

  const showAlert = (type, message) => {
    setAlert({ type, message, visible: true });
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, visible: false }));
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
