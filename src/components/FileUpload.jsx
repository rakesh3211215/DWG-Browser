import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, UploadCloud, FileText } from "lucide-react";
import { useAlert } from "./Alert/AlertContext";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);

  const { showAlert } = useAlert();

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/files");
      setFiles(res.data);
    } catch (err) {
      console.error("Error fetching files:", err);
      showAlert("error", "Failed to fetch uploaded files.");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      showAlert("warning", "Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showAlert("success", "File uploaded successfully!");
      setFile(null);
      fetchFiles(); // Refresh list
    } catch (err) {
      console.error(err);
      showAlert("error", "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md border dark:border-gray-700">
      <label className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-blue-500 bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-300 cursor-pointer px-8 py-16 rounded-lg transition-colors duration-300">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
        <UploadCloud className="w-12 h-12" />
        {file ? (
          <span className="text-base font-medium text-center">{file.name}</span>
        ) : (
          <span className="text-base font-medium text-center">
            Click to select a file
          </span>
        )}
      </label>

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-lg transition-colors duration-300 disabled:opacity-60"
      >
        {uploading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <UploadCloud className="w-5 h-5" />
            Upload File
          </>
        )}
      </button>

      {files.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Uploaded Files:
          </h3>
          <ul className="space-y-2 max-h-52 overflow-y-auto">
            {files.map((f, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-300"
              >
                <FileText className="w-4 h-4" />
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm"
                >
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
