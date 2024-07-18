import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Footer from './components/Footer';
import DppCreator from './components/create_dpp';
import Adminupload from './components/adminupload';

function App() {
  const handleSubmit = async (formData) => {
    // event.preventDefault();
    const { email, password } = formData;

    console.log("Submitted with values:", email, password);
    const jsonData = JSON.stringify({
      email,
      password,
    });
    console.log(jsonData);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: jsonData,
        credentials: "include",
      });

      if (response.ok) {
        console.log("Login successful");
        const jwtCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="));

        if (jwtCookie) {
          const jwtToken = jwtCookie.split("=")[1];
          console.log("JWT Token:", jwtToken);
          // Check if the user is admin

          const extractValuesFromJWT = (jwtToken) => {
            const tokenParts = jwtToken.split(".");
            if (tokenParts.length !== 3) {
              throw new Error("Invalid JWT token");
            }
            const base64Payload = tokenParts[1];
            const decodedPayload = atob(base64Payload);
            const payloadObj = JSON.parse(decodedPayload);
            return payloadObj;
          };

          // Example usage:
          const payload = extractValuesFromJWT(jwtToken);

          // console.log("Decoded Payload:", payload);
          // console.log("Email:", payload.email);
          // console.log("Is admin:", payload.admin);
          // console.log("Is admin:", payload.userId);
          localStorage.setItem("cookie", jwtCookie);
          localStorage.setItem("Email", payload.email);
          localStorage.setItem("admin", payload.admin);
          localStorage.setItem("hostel_no", payload.hostel_no);
          localStorage.setItem("userId", payload.userId);
          localStorage.setItem("full_name", payload.full_name);
          console.log(localStorage.getItem("admin"));
          console.log(localStorage.getItem("hostel_no"));
          const isAdmin = localStorage.getItem("admin") === "true";

          if (isAdmin) {
            // Redirect to the admin dashboard
            window.location.href = "/dashboard";
          } else {
            // Redirect to the user dashboard
            window.location.href = "/announcement";
          }
        } else {
          console.log("JWT cookie not found");
        }
      } else {
        console.error("Login failed:", response.statusText);
        // Handle unsuccessful login (display error message, etc.)
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DppCreator/>} />
          <Route path="/adminupload" element={<Adminupload/>} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
