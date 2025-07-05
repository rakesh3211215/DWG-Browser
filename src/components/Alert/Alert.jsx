import { useAlert } from "./AlertContext";
import { X, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

const ICONS = {
  success: <CheckCircle className="w-5 h-5 text-green-700" />,
  error: <XCircle className="w-5 h-5 text-red-700" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-800" />,
  info: <Info className="w-5 h-5 text-blue-800" />,
};

const COLOR_CLASSES = {
  success: "bg-green-100 text-green-700",
  error: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
};

const Alert = () => {
  const { alert, closeAlert } = useAlert();

  if (!alert.visible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div
        className={`flex items-start justify-between gap-4 p-4 rounded-lg text-sm shadow ${
          COLOR_CLASSES[alert.type]
        }`}
        role="alert"
      >
        <div className="flex items-start gap-3">
          {ICONS[alert.type]}
          <span>{alert.message}</span>
        </div>
        <button onClick={closeAlert} className="p-1 hover:opacity-75">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
