import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Sports() {
    const totalBats = 50;
    const issuedBats = 45;
    const totalBalls = 50;
    const issuedBalls = 40;
    const totalKits = 50;
    const issuedKits = 10;
    const totalRackets = 50;
    const issuedRackets = 40;
    const totalShutles = 50;
    const issuedShutles = 40;
    const totalBNets = 10;
    const issuedBNets = 4;
    const totalBBalls = 10;
    const issuedBBalls = 4;
    const totalBaskets = 10;
    const issuedBaskets = 4;
    const totalVBalls = 10;
    const issuedVBalls = 4;
    const totalVNets = 10;
    const issuedVNets = 4;
    const totalTTRackets = 50;
    const issuedTTRackets = 40;
    const totalTTBalls = 10;
    const issuedTTBalls = 4;
    const totalTTNets = 10;
    const issuedTTNets = 4;


  return (
    <div className="h-100vh px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto ">
            <div className="flex justify-center items-start gap-8">
                <nav className="w-1/5 md:w-1/4 h-full bg-gray-800 p-8 rounded-lg">
                    <ul className="text-white">
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                        <FontAwesomeIcon className="mr-2" icon={faFutbol} />
                            Sports Items
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Student" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Issued Details
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="w-full md:w-3/4">
                    <div className="p-2">
                        <h2 className="text-2xl text-white font-semibold mb-4">Cricket</h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Bats</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Total -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{totalBats}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{issuedBats}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Balls</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Total -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{totalBalls}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{issuedBalls}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Extra kit</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-green-500">Total -</span>
                                    <p className="text-3xl font-semibold text-green-500">{totalKits}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg text-green-500">Issued -</span>
                                    <p className="text-3xl font-semibold text-green-500">{issuedKits}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2">
                        <h2 className="text-2xl text-white font-semibold mb-4">Badminton</h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Rackets</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Total -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{totalRackets}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{issuedRackets}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Shutles</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Total -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{totalShutles}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{issuedShutles}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Net</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-green-500">Total -</span>
                                    <p className="text-3xl font-semibold text-green-500">{totalBNets}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg text-green-500">Issued -</span>
                                    <p className="text-3xl font-semibold text-green-500">{issuedBNets}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        <h2 className="text-2xl text-white font-semibold mb-4">Table Tennis</h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Rackets</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Total -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{totalTTRackets}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{issuedTTRackets}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Balls</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Total -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{totalTTBalls}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{issuedTTBalls}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Net</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-green-500">Total -</span>
                                    <p className="text-3xl font-semibold text-green-500">{totalTTNets}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg text-green-500">Issued -</span>
                                    <p className="text-3xl font-semibold text-green-500">{issuedTTNets}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        <h2 className="text-2xl text-white font-semibold mb-4">Basketball</h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Balls</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Total -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{totalBBalls}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{issuedBBalls}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Baskets</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Total -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{totalBaskets}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{issuedBaskets}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="p-2">
                        <h2 className="text-2xl text-white font-semibold mb-4">Volleyball</h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Balls</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Total -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{totalVBalls}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-sky-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-sky-400">{issuedVBalls}</p>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:bg-slate-800 max-w-60">
                                <h3 className="text-xl text-white font-semibold mx-auto">Net</h3>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Total -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{totalVNets}</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <span className="text-lg text-yellow-400">Issued -</span>
                                    <p className="text-3xl font-semibold text-yellow-400">{issuedVNets}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
