import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faSadTear, faFileAlt, faUsersCog, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Complaints() {
  return (
    <div className="h-100vh px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-center items-start gap-8">

        <nav className="w-1/5 md:w-1/4 h-full bg-gray-800 p-8 rounded-lg">
                    <ul className="text-white">
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faChartBar} />
                            Analytics
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Student" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Students
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Complaints" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Complaints
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/FeeDetails" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Fee Details
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Workers" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Workers Details 
                            </Link>
                        </li>
                    </ul>
                </nav>

          <div className="w-full md:w-3/4 mt-4 md:mt-0">
            <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="max-w-full">
                <div className="grid gap-6 md:gap-12">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
                        Total Complaints
                      </h1>
                    </div>
                    <div className="relative w-full">
                      <FontAwesomeIcon icon={faSearch} className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <input className="pl-8 w-full md:w-[400px] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-100" placeholder="Search..." type="search" />
                    </div>
                    <div>
                      <table className="w-full md:w-[calc(100% + 4rem)] border border-gray-200 rounded-md overflow-hidden">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr className="text-gray-400">
                            <th className="py-2 px-4 text-center">Sr.No.</th>
                            <th className="py-2 px-4">Type</th>
                            <th className="py-2 px-4">Id</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Problem Information</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <TableRow id="1" Type="Mess Related" Id="231" Status="Solved" problemDescription="The food served in the mess was not up to the standard. It was stale and tasteless." />
                          <TableRow id="2" Type="Water Related" Id="231" Status="Pending" problemDescription="There is a water leakage issue in the hostel building. The leakage is causing water wastage and damaging the building structure." />
                          <TableRow id="3" Type="Mess Related" Id="231" Status="Solved" problemDescription="The menu in the mess lacks variety. The same dishes are served repeatedly." />
                          <TableRow id="4" Type="Mess Related" Id="231" Status="Solved" problemDescription="The food served in the mess was not up to the standard. It was stale and tasteless." />
                          <TableRow id="5" Type="Water Related" Id="231" Status="Pending" problemDescription="There is a water leakage issue in the hostel building. The leakage is causing water wastage and damaging the building structure." />
                          <TableRow id="6" Type="Mess Related" Id="231" Status="Solved" problemDescription="The menu in the mess lacks variety. The same dishes are served repeatedly." />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow({ id, Type, Id, Status, problemDescription }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleReadMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <tr className="text-gray-200 bg-gray-800 rounded-lg my-4">
      <td className="py-2 px-4 text-center rounded-l-lg">{id}</td>
      <td className="py-2 px-4 text-center">{Type}</td>
      <td className="py-2 px-4 text-center">{Id}</td>
      <td className="py-2 px-4 text-center">{Status}</td>
      <td className="py-2 px-4 text-center relative rounded-r-lg">
        {showFullDescription ? (
          <div>
            <p>{problemDescription}</p>
            <button
              className="text-blue-500 hover:text-blue-700 mt-2"
              onClick={handleReadMore}
            >
              Read Less
            </button>
          </div>
        ) : (
          <div>
            <p>{`${problemDescription.slice(0, 50)}...`}</p>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={handleReadMore}
            >
              Read More
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}