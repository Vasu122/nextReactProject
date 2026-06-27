"use client"
import { useRef } from 'react';

export default function FileUpload({ onFileRead }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      onFileRead(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="relative">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".html,.htm,.txt"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
      >
        Upload HTML File
      </button>
    </div>
  );
}