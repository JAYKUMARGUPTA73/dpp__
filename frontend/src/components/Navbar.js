import React, { useState } from "react";
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
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = localStorage.getItem("admin") === "true";
  const isCookie = localStorage.getItem("cookie");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 p-4 border-b  ">
      <div className="navbar-items max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-lg font-bold">
            Logo
          </a>
          <p className="ml-2 text-white text-lg font-bold">Company</p>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:justify-evenly md:space-x-10 md:items-center`}
        >
          {isAdmin && (
            <li>
              <NavLink
                to="/adminupload"
                activeClassName="text-indigo-600"
                className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
              >
                <FontAwesomeIcon icon={faChartLine} className="mr-1" />
                adminupload
              </NavLink>
            </li>
          )}
          <li>
            {/* <div  className="h-[50px]"> */}
            <NavLink
              to="/rooms"
              activeClassName="text-indigo-600"
              className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
            >
              <FontAwesomeIcon icon={faBed} className="mr-1" />
              Rooms
            </NavLink>
            {/* </div> */}
          </li>
          <li style={{width:"max-content"}}>
            <NavLink
              to="/announcement"
              activeClassName="text-indigo-600"
              className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
              
            >
              <FontAwesomeIcon icon={faScroll} className="mr-1" />
              Announcements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              activeClassName="text-indigo-600"
              className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
            >
              <FontAwesomeIcon icon={faAddressBook} className="mr-1" />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName="text-indigo-600"
              className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              Profile
            </NavLink>
          </li>
          {!isCookie && (
            <li>
              <NavLink
                to="/login"
                activeClassName="text-indigo-600"
                className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
              >
                <FontAwesomeIcon icon={faSignIn} className="mr-1" />
                Login
              </NavLink>
            </li>
          )}
          {!isCookie && (
            <li>
              <NavLink
                to="/signUp"
                activeClassName="text-indigo-600"
                className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
              >
                <FontAwesomeIcon icon={faSignIn} className="mr-1" />
                Signup
              </NavLink>
            </li>
          )}
          {isCookie && (
            <li>
              <NavLink
                to="/chatgroup"
                activeClassName="text-indigo-600"
                className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
              >
                <FontAwesomeIcon icon={faSignIn} className="mr-1" />
                chats
              </NavLink>
            </li>
          )}
          {
            isCookie&&
            <li>
              <label
                htmlFor="hey"
                activeClassName="text-indigo-600"
                className="text-white border border-gray-800 hover:text-gray-300 hover:border-gray-300 rounded-full px-2 py-1 flex items-center"
                onClick={async () => {
                  try {
                    const response = await fetch(
                      "http://localhost:5000/api/auth/logout",
                      {
                        method: "POST", // Or 'GET', 'PUT', 'DELETE', etc. depending on your server setup
                        credentials: "include", // Include cookies in the request
                      }
                    );

                    if (response.ok) {
                        localStorage.setItem('admin',false);
                        localStorage.setItem('Email','');
                        localStorage.setItem('cookie','');
                        console.log("Logout successful");
                        window.location.href = "/login";
                      // Optionally, redirect the user to the login page or perform any other action after logout
                    } else {
                      console.error("Logout failed:", response.statusText);
                      // Handle unsuccessful logout (display error message, etc.)
                    }
                  } catch (error) {
                    console.error("Error logging out:", error);
                    // Handle error as needed
                  }
                }}
              >
                logout
              </label>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
