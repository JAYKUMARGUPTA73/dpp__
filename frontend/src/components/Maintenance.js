import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Maintenance = () => {
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
                <h2 className="font-bold text-3xl mb-6">Maintenance and Upkeep of Hostels</h2>
                <ul className="list-disc pl-8 text-gray-800">
                    <li className="mb-4">
                        It is expected that residents will treat the hostel property with care and consideration.
                    </li>
                    <li className="mb-4">
                        Fixing of posters, making use of walls / doors as a canvas for painting of various
                        expressions, etc., are strictly prohibited. The cost of repair to pay for the damage caused to
                        the walls / doors due to this sort of activity will be recovered from the occupants of the
                        respective rooms.
                    </li>

                    <li className="mb-4">
                        For the convenience of the hostelites, a complaint handling system is in vogue. In case of
                        any complaint regarding upkeep and maintenance, the complaint form should be filled out in
                        duplicate and a copy should be handed over to the building supervisor. A complaint register
                        is also placed at the entrance of each hostel block for this purpose
                    </li>

                    <li className="mb-4">
                        <b>
                            All avenues are available to you for lodging complaints for unattended works. It would,
                            however, be appropriate if immediate channels are tapped first. These are:

                            <ul className="list-disc pl-4 mt-2">
                                <li>Hostel Website
                                </li>
                                <li>Building supervisor
                                </li>

                                <li>Deputy Warden
                                </li>
                            </ul>
                        </b>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Maintenance;