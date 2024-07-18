import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const ChatRoom = () => {
    const { group_id } = useParams(); // Get group_id from URL params
    const [chatMessages, setChatMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [socket, setSocket] = useState(null);
    const [currentUser, setCurrentUser] = useState(null); // Current user information

    useEffect(() => {
        const user = localStorage.getItem('userId'); // Assuming user info is stored in localStorage
        setCurrentUser(user);
        // Connect to the server using Socket.IO
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        // Join the group room
        newSocket.emit('joinGroup', group_id);

        // Listen for incoming messages from the server
        newSocket.on('message', (data) => {
            console.log(data)
            setChatMessages(prevMessages => [...prevMessages, { ...data, timestamp: new Date() }]);
        });

        // Fetch initial chat messages from the server
        const fetchMessages = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/auth/getGroupMessages/${group_id}`);
                if (response.ok) {
                    const data = await response.json();
                    const messagesWithTimestamp = data[0].messages.map(message => ({ ...message, timestamp: new Date() }));
                    setChatMessages(messagesWithTimestamp);
                } else {
                    throw new Error('Failed to fetch chat messages');
                }
            } catch (error) {
                console.error('Error fetching chat messages:', error);
            }
        };

        fetchMessages();

        // Get current user information (replace this with your actual authentication logic)
        console.log('Current user:', user); // Log current user

        return () => {
            // Disconnect the socket when the component unmounts
            newSocket.disconnect();
        };
    }, [group_id]);

    // Function to handle sending messages
   const handleMessageSend = () => {
    // Check if currentUser is null or undefined
    if (!currentUser) {
        console.error('User ID is required');
        return;
    }
    const full_name = localStorage.getItem('full_name');

    // Send message to the server with user_id included
    socket.emit('message', { message: messageInput, group_id,user_id: { 
        _id: currentUser, 
        full_name: full_name 
    }});
    
    // Get full name from localStorage
   

    // Update sender's chat messages locally with timestamp and user details
    const senderMessage = { 
        message: messageInput,
        user_id: { 
            _id: currentUser, 
            full_name: full_name 
        }, 
        timestamp: new Date() 
    };
    setChatMessages(prevMessages => [...prevMessages, senderMessage]);
    
    // Clear message input
    setMessageInput('');
};


    // Function to calculate time ago
   // Function to calculate time ago or display date
const timeAgo = (timestamp) => {
    
    const current = new Date();
    
    if(!timestamp)
    {
        const options = { hour: 'numeric', minute: 'numeric' };
        return current.toLocaleTimeString(undefined, options);
    }
    const previous = new Date(timestamp);
    
    const difference = current - previous;
    const seconds = Math.round(difference / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);

    // Check if the message was sent on the previous day
    const previousDate = previous.getDate();
    const currentDate = current.getDate();
    if (previousDate !== currentDate) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return previous.toLocaleDateString(undefined, options);
    } else {
        // Otherwise, display the time
        const options = { hour: 'numeric', minute: 'numeric' };
        return previous.toLocaleTimeString(undefined, options);
    }
};


    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
    <div className="text-2xl font-bold mb-4">Chat Room</div>
    <div className="flex flex-col space-y-4">
        {chatMessages.map((message, index) => (
            <div key={index} className={`flex items-center justify-${(message.user_id && message.user_id._id === currentUser) ? 'end' : 'start'}`}>
                {message.user_id && message.user_id._id !== currentUser && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">{message.user_id.full_name}</div>
                )}
                <div className={`bg-gray-200 px-4 py-2 rounded-lg ${(message.user_id && message.user_id._id === currentUser) ? 'bg-green-200 self-end' : 'bg-gray-200 self-start'}`}>
                    <div>{message.message}</div>
                    <div className="text-xs text-gray-500">{timeAgo(message.createdAt ? message.createdAt : 0)}</div>
                </div>
            </div>
        ))}
    </div>
</div>

            <div className="flex">
                <input 
                    type="text" 
                    placeholder="Type your message here" 
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none" 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                    onClick={handleMessageSend}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
