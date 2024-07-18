import React from "react";
import { Link, useLocation } from 'react-router-dom';

const General = () => {
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
                <h2 className="font-bold text-3xl mb-6">General Rules & Regulations</h2>
                <ul className="list-disc pl-8 text-gray-800">
                    <li className="mb-4">
                        Identity card will be issued to all the inmates of the hostel. They should produce their
                        identity cards on demand. In case of loss, duplicate card will be issued on payment of
                        Rs.100/-.
                    </li>
                    <li className="mb-4">
                        Through the support staff at hostels, we provide you the following services:
                        <ul className="list-disc pl-4 mt-2">
                            <li>Day-to-day maintenance work
                            </li>
                            <li>Cleaning of premises
                            </li>

                            <li>Newspapers/Sports and recreation facilities.</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        No member shall absent himself from the hostel overnight without prior permission from
                        the Deputy Warden.
                    </li>
                    <li className="mb-4">
                        Students should not arrange any function, meeting, or religious gathering within the hostel
                        campus without special permission of the authorities. In case, the students need to organize
                        a function at the hostel, they are required to get prior permission from the Chief Warden
                        through the Deputy Warden after giving a written request in this regard. If the
                        administration allows residents to organize any function, the hostel representative may be
                        asked to provide a written undertaking of good conduct and observing accepted norms of
                        behavior.
                    </li>
                    <li className="mb-4">
                        Students using computers are not permitted to use multimedia speakers. Violation of this
                        will be viewed seriously. Only ear hags can be used in the rooms to respect the privacy of
                        other roommates.
                    </li>
                    <li className=" mb-4">
                        Hostel administration will not entertain any complaint regarding theft of Cell phones,
                        Laptops, etc
                    </li>
                    <li className=" mb-4">
                        Surprise check of hostel rooms may be carried out from time to time by the Wardens and
                        other hostel staff to ensure there is no unlawful activity like ragging, smoking, harassing
                        roommates, Possession of weapons, etc. Management Representatives are empowered to
                        check the hostel rooms at any time and the equipment/materials. In case of ladies hostels,
                        inspection will be carried out in the presence of the deputy warden/SRO/supervisors.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default General;
