import React from "react";
import { Link, useLocation } from 'react-router-dom'; 

const Guest = () => {
    const location = useLocation(); 
    return (
        <div className="flex h-full">
            <nav className="w-1/5 md:w-1/4 bg-gray-800 p-8 rounded-lg my-1 mb-10">
                <ul className="text-white">
                    <li className={`py-4 px-4 text-lg font-semibold hover:bg-gray-700 transition duration-300 rounded-md ${location.pathname === "/rules" ? "bg-gray-700" : ""}`}>
                        <Link to="/rules" className="flex items-center text-white hover:underline">
                            Rules & Regulations
                        </Link>
                    </li>
                    <li className={`py-4 px-4 text-lg font-semibold hover:bg-gray-700 transition duration-300 rounded-md ${location.pathname === "/general" ? "bg-gray-700" : ""}`}>
                        <Link to="/general" className="flex items-center text-white hover:underline">
                            General
                        </Link>
                    </li>
                    <li className={`py-4 px-4 text-lg font-semibold hover:bg-gray-700 transition duration-300 rounded-md ${location.pathname === "/guest" ? "bg-gray-700" : ""}`}>
                        <Link to="/guest" className="flex items-center text-white hover:underline">
                            Guest Accommodation
                        </Link>
                    </li>
                    <li className={`py-4 px-4 text-lg font-semibold hover:bg-gray-700 transition duration-300 rounded-md ${location.pathname === "/mess" ? "bg-gray-700" : ""}`}>
                        <Link to="/mess" className="flex items-center text-white hover:underline">
                            Mess Regulation
                        </Link>
                    </li>
                    <li className={`py-4 px-4 text-lg font-semibold hover:bg-gray-700 transition duration-300 rounded-md ${location.pathname === "/ragging" ? "bg-gray-700" : ""}`}>
                        <Link to="/ragging" className="flex items-center text-white hover:underline">
                            Ragging
                        </Link>
                    </li>
                    <li className={`py-4 px-4 text-lg font-semibold hover:bg-gray-700 transition duration-300 rounded-md ${location.pathname === "/maintenance" ? "bg-gray-700" : ""}`}>
                        <Link to="/maintenance" className="flex items-center text-white hover:underline">
                            Maintenance and Upkeep
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-4/5 mx-auto p-8 mb-10">
                <h2 className="font-bold text-3xl mb-6">Guest Accommodation Rules</h2>
                <ul className="list-disc pl-8 text-gray-800">
                    <li className="mb-4">
                        Subject to the availability of rooms in the hostel, if a parent needs accommodation for a
                        short stay (one or two days only), he/she has to intimate the hostel office at least 7 days
                        before the expected date of occupancy.
                    </li>
                    <li className="mb-4">
                        If allowed to avail the hostel facility for stay, the following charges shall apply:
                        <ul className="list-disc pl-4 mt-2">
                            <li>Rental charges: Rs 200/- per day.</li>
                            <li>Food cost: Rs 250/- per day.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        Hostel rules and regulations will equally apply to guests also.
                    </li>
                    <li>
                        Any damages caused to the NIT hostel by guests shall be recovered from the concerned
                        individuals.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Guest;
