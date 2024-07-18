import React, { useState } from 'react';

const Adminupload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a CSV file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('csv', file);

    try {
      const response = await fetch('http://localhost:5000/api/auth/read-csv', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      setMessage('Upload successful!');
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Upload failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">Upload CSV File</h2>
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer mb-4"
        />
        <button 
          onClick={handleUpload} 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Upload
        </button>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Adminupload;
