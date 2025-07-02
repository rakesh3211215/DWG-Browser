import React, { useState } from "react";
import axios from "axios";
import { Loader2, UploadCloud } from "lucide-react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful!");
      setFile(null);
    } catch (err) {
      alert("Upload failed");
      console.error(err);
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
    </div>
  );
}

export default FileUpload;
