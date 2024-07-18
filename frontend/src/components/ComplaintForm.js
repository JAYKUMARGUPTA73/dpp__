// ComplaintForm.js
import React, { useState } from 'react';

function ComplaintForm({ onClose }) {
    const [name, setName] = useState('');
    const [rollNumber, setRollNo] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        console.log('Submitted with values:', name, rollNumber, complaintType, message);
        const jsonData = JSON.stringify({
            name,
            rollNumber,
            complaintType,
            message,
        });
        console.log(jsonData);
        try {
            const response = await fetch('http://localhost:5000/api/auth/complaint', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonData,
            });
            console.log('Response:', response);
            // Handle response as needed
        } catch (error) {
            console.log('Error submitting complaint:', error);
            // Handle error as needed
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg max-w-md shadow-md transform transition-all duration-500">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Complaint</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="input-style"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
                            Roll.No.
                        </label>
                        <input
                            id="rollNo"
                            type="text"
                            className="input-style"
                            placeholder="Enter your Roll.No."
                            value={rollNumber}
                            onChange={(e) => setRollNo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700">
                            Complaint Type
                        </label>
                        <select
                            id="complaintType"
                            className="input-style"
                            value={complaintType}
                            onChange={(e) => setComplaintType(e.target.value)}
                            required
                        >
                            <option value="">Select complaint type</option>
                            <option value="Electricity Related">Electricity Related</option>
                            <option value="Mess Related">Mess Related</option>
                            <option value="Water Related">Water Related</option>
                            <option value="Staff">Staff Related</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="input-style"
                            placeholder="Enter your message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn-submit w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit Complaint
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ComplaintForm;
