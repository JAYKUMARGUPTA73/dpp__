import React, { useEffect, useState } from "react";
import { Link,NavLink} from "react-router-dom"; // Import Link for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faAddressBook,
  faBed,
  faFile,
  faScroll,
  faUser,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
const Chatgroup = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch all groups when the component mounts
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      // Make a GET request to fetch all groups
      const response = await fetch("http://localhost:5000/api/auth/getgroup"); // Adjust the URL based on your API route
      if (!response.ok) {
        throw new Error("Failed to fetch groups");
      }
      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="text-2xl font-bold mb-4">Available Groups</div>
      <div>
        {groups.map((group) => (
          <div key={group.group_id} className="mb-2">
            <NavLink
              to={`/chatroom/${group.group_id}`} 
              activeClassName="text-indigo-600"
              className="text-black border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
            >
              <FontAwesomeIcon icon={faSignIn} className="mr-1" />
              {group.group_name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatgroup;
