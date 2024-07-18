import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Mess = () => {
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
                <h2 className="font-bold text-3xl mb-6">Mess Rules & Regulations</h2>
                <ul className="list-disc pl-8 text-gray-800">
                    <li className="mb-4">
                    Once a student joins the hostel, he / she are deemed to have become a member of the
allotted mess until he / she vacates the hostel officially.
                    </li>
                    <li className="mb-4">
                    Strict discipline should be maintained in the dining hall.
                    </li>

                    <li className="mb-4">
                    Menu will be displayed on the notice board / Website . Changes can be made based on decision of
mess committee formed by the students’ representatives and wardens.
                    </li>
                    <li className="mb-4">
                    Day scholars cannot be entertained as guests in the mess
                    </li>
                    <li className="mb-4">
                    Inmates can entertain their parents as guests on prior information to the hostel authorities.
The guest rate is Rs.50/- for breakfast, Rs.80 for lunch and dinner respectively. For special
lunch / dinner the rate is Rs.100/-. The rates are subject to change.
                    </li>
                    <li className=" mb-4">
                    Food will not be served in rooms and the inmates are not supposed to take food to their
rooms. If an inmate is ill, the deputy warden will make suitable arrangements.
                    </li>
                    <li className=" mb-4">
                    The inmates should not enter the kitchen.
                    </li>
                    <li className="mb-4">
                        <b>
                    Food will be served at the following timings: -
                        <ul className="list-disc pl-4 mt-2">
                            <li>Breakfast:  07.30 am to 09.00 am
                            </li>
                            <li>Lunch:  11.30 am to 01.30 pm

                            </li>

                            <li>Dinner:  07.30 pm to 09.00 pm</li>
                        </ul>
                        </b>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mess;