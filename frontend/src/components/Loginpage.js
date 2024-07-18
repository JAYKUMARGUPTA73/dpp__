import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";


function Login({handleSubmit}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the email and password to a server for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    handleSubmit({email,password});
  };
 
  return (
    <div>
      <div className="bg-white shadow-md mx-auto max-w-fit flex items-center justify-center m-10" style={{borderRadius:'50px'}}>
        
        <div className='flex items-center justify-center max-w-[60vw]' >     
        <div className="flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="mx-auto w-[130vw]"
              style={{ width: "80%", pointerEvents: "none" }}
            >
              <source src="login.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>    
            
            <form onSubmit={handleFormSubmit} className="space-y-4 px-8 flex flex-col w-[90vw]">
            <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-6 text-center">Welcome to NIT Kurukshetra</h2>
            <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
                </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none"
                />
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mt-2 block">
                Forgot Password?
                </a>
            </div>
            <button
                type="submit"
                className="w-full mx-auto py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
            >
                Login
            </button>
            <div>
                <p className='text-center text-l'>Doesn't have account yet? <Link className="text-blue-600 hover:underline" to="/signup">Sign up</Link> </p>
            </div>
            <div className="text-center w-full flex justify-center items-center">
                <div className="bg-black" style={{height:"0.5px", width:'5vw'}}></div>
                <span className='text-center'>or login with</span>
                <div className="bg-black" style={{height:"0.5px", width:'5vw'}}></div>
            </div>
            <div className="flex justify-center">
                <div className="flex items-center space-x-3">
                <button className="py-1 px-1 bg-white text-gray-700 font-bold hover:bg-gray-100 transition duration-300 flex items-center">
                    <svg
                    className="w-6 h-6 rounded-md"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                        fill="currentColor"
                    />
                    </svg>
                </button>
                <button className="py-1 px-1 bg-white text-gray-700 font-bold hover:bg-gray-100 transition duration-300 flex items-center">
                <svg className="w-6 h-6 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
                </button>
                <button className="py-1 px-1 bg-white text-gray-700 font-bold hover:bg-gray-100 transition duration-300 flex items-center">
                <svg  className="w-6 h-6 rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                </button>
                <button className="py-1 px-1 bg-white text-gray-700 font-bold hover:bg-gray-100 transition duration-300 flex items-center">
                    <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path className=''
                        d="M23.766 12.277c0-.516-.027-.949-.083-1.437H12.33v2.724h3.834c-.17 1.031-1.206 2.891-3.834 2.891-2.312 0-4.192-1.912-4.192-4.274 0-2.362 1.88-4.274 4.192-4.274 1.188 0 2.234.436 3.053 1.305l2.093-2.093c-1.354-1.256-3.108-2.016-5.146-2.016-4.061 0-7.365 3.323-7.365 7.42 0 4.097 3.304 7.42 7.365 7.42 2.197 0 4.135-.723 5.523-2.166 1.429-1.481 1.843-3.496 1.843-4.851z"
                        fill="currentColor"
                    />
                    </svg>
                </button>
                </div>
            </div>
            </form>
            
            <div className='flex items-center justify-center hidden xl:block' >
                <img src="/loginimg.jpg" alt="loginimg" className='mx-auto object-contain' style={{borderBottomRightRadius:'50px', borderTopRightRadius:'50px'}} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;