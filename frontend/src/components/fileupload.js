import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        setUploading(true);
        setMessage('');

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('http://localhost:5000/api/auth/testfb', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file.');
            }

            const responseData = await response.text();
            setMessage(responseData);
        } catch (error) {
            setMessage(error.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Upload a File</h2>
            <input type="file" onChange={handleFileChange} className="border rounded px-4 py-2 mb-4 w-full" />
            <button onClick={handleUpload} disabled={uploading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
};

export default FileUpload;
