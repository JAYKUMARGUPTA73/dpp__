import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Ragging = () => {
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
                <h2 className="font-bold text-3xl mb-6">Ragging</h2>
                <ul className="list-disc pl-8 text-gray-800">
                    <li className="mb-4">
                        Ragging is a cognizable offence.
                    </li>
                    <li className="mb-4 font-bold">
                        Ragging in any form is strictly prohibited and they are advised not to indulge in any
                        form of the same; severe action will be taken against those who indulge in such
                        activities as per Govt. orders and University rules.
                    </li>
                    <li className="mb-4">
                        Ragging entails heavy fines and/or suspension/ expulsion from the hostel and/or University
                    </li>
                    <li className="mb-4">
                        Any student, with the intention of causing ragging or with the knowledge that he/she is
                        likely by such act to cause ragging, commits or abets ragging, and thereby teases or
                        embarrasses or humiliates or assaults or uses criminal force or criminally intimidates or
                        wrongfully restrains or wrongfully confines or causes grievous hurt or kidnaps or abducts or
                        rapes or commits unnatural offence or causes death or abets suicide shall be punished as per
                        the <b>Tamil Nadu Prohibition of Ragging Act, 1997.</b>
                    </li>
                    <li className="mb-4">
                        If the individuals committing or abetting ragging are not identified, collective punishment
                        could be resorted to act as a deterrent and to ensure collective pressure on the potential
                        raggers.

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Ragging;