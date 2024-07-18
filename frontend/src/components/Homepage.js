
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      
      {/* Hero Section */}
      <div className="bg-hero-image bg-cover bg-center flex-1 flex items-center justify-center relative p-1">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold mb-4">Affordable and Comfortable</h1>
          <h2 className="text-2xl font-bold mb-6">Hostel Rooms</h2>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">Login now</button>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="bg-gray-800 flex flex-col flex-wrap justify-center px-4">

      {/* Services Section */}
      <div className="mx-auto py-5 bg-gray-800">
        <h2 className="text-4xl text-white font-bold mb-4 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center text-white hover:bg-slate-600 transform transition-all cursor-pointer">
            <img src="/rooms.jpg" alt="Furnished Rooms" className="mx-auto mb-2 max-h-60 w-full" />
            <h3 className="text-lg font-bold mb-2">Furnished Rooms</h3>
            <p>We provide fully furnished rooms with quality mattresses, tables, closets and other required facilities.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center text-white hover:bg-slate-600 transform transition-all cursor-pointer">
            <img src="/wifi.jpg" alt="WiFi" className="mx-auto mb-2 max-h-60 w-full" />
            <h3 className="text-lg font-bold mb-2">WiFi</h3>
            <p>We provide wireless high speed internet so that you can stay connected with your friends and family.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center text-white hover:bg-slate-600 transform transition-all cursor-pointer">
            <img src="/mess.jpg" alt="Mess" className="mx-auto mb-2  max-h-60 w-full" />
            <h3 className="text-lg font-bold mb-2">Mess</h3>
            <p>We cater to your food requirements as well. We provide breakfast, lunch & dinner services in our canteen.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center text-white hover:bg-slate-600 transform transition-all cursor-pointer">
            <img src="/housekeeping.jpg" alt="Housekeeping" className="mx-auto mb-2  max-h-60 w-full" />
            <h3 className="text-lg font-bold mb-2">Housekeeping</h3>
            <p>We also provide housekeeping services like laundry, room cleaning, dish cleaning based on requirements.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center text-white hover:bg-slate-600 transform transition-all cursor-pointer">
            <img src="/watchman.jpg" alt="Security" className="mx-auto mb-2 max-h-60 w-full" />
            <h3 className="text-lg font-bold mb-2">Security</h3>
            <p>Depending on the purpose of keeping a close watch on the visiters and passesby we provide efficient watchman.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center text-white hover:bg-slate-600 transform transition-all cursor-pointer">
            <img src="/gym.jpg" alt="Gym & Sports" className="mx-auto mb-2 max-h-60 w-full" />
            <h3 className="text-lg font-bold mb-2">Gym & Sports</h3>
            <p>Explore our comprehensive range of fitness content, tailored to empower and inspire your journey towards peak health and wellness.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-700 container my-5 mx-auto px-4 py-8 flex flex-col md:flex-row items-center rounded-lg max-w-full">
        <div className="md:w-1/2 mb-4 md:mb-0 flex">
          <img src="/aboutus.png" alt="About Us" className="rounded-lg shadow-md w-4/5 mx-auto" />
        </div>
        <div className="bg-gray-700 md:w-1/2 md:pl-2 text-white">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-xl">We offer a pocket friendly stay to each patron and welcome them with complete warmth and hospitality. We offer an array of all essential services that are rendered by the hostel for a hassle free stay at no extra costs. For accommodation, the property offers spacious, airy and well-lit rooms, featuring sophisticated and welcoming ambience with the warmth and comfort of home. We take utmost care of the safety and security of individuals and their belongings staying in our hostel.</p>
        </div>
      </div>
    
      {/* Gallery Section */}

      {/* Contact Section */}
      <div className="container px-4 py-8 bg-gray-700 text-white mx-auto my-5 rounded-lg  max-w-full">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Our Office Address</h3>
            <p>National Institute of Technology,<br />Kurukshetra, Thanesar,<br />Haryana, 136119</p>
            <p className="mt-4">
              <span className="font-bold">Email:</span> admin@nitkkr.ac.in<br />
              <span className="font-bold">Phone:</span> +91- 01744 233 208<br />
              <span className="font-bold">Hours:</span> Mon - Sun: 10:00 AM - 07:00 PM
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email ID" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Mobile Number" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" className="w-full px-3 py-2 border rounded-md" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">Submit</button>
            </form>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default HomePage;


















