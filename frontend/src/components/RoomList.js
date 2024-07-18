import React, { useState } from 'react';
import './RoomList.css';

function RoomList() {
    const roomsPerFloor = 50;

    const [roomAvailability, setRoomAvailability] = useState(Array(roomsPerFloor * 6).fill('vacant'));

    const updateRoomAvailability = (roomIndex, status) => {
        const updatedAvailability = [...roomAvailability];
        if (status === 'vacant') {
            updatedAvailability[roomIndex] = 'filled';
        } else if (status === 'filled') {
            updatedAvailability[roomIndex] = 'filled_not_available';
        } else {
            updatedAvailability[roomIndex] = 'vacant';
        }
        setRoomAvailability(updatedAvailability);
    };

    const renderRooms = (floor) => {
        const rooms = [];
        for (let roomNumber = 1; roomNumber <= roomsPerFloor; roomNumber++) {
            const roomIndex = roomNumber + (roomsPerFloor * (floor - 1)) - 1;
            const roomStatus = roomAvailability[roomIndex];
            let roomClass = "room-box vacant";
            if (roomStatus === 'filled') {
                roomClass = "room-box filled";
            } else if (roomStatus === 'filled_not_available') {
                roomClass = "room-box filled-not-available";
            }
            rooms.push(
                <div key={`floor${floor}-room${roomNumber}`} className={roomClass} onClick={() => updateRoomAvailability(roomIndex, roomStatus)}>
                    {floor * 100 + roomNumber}
                </div>
            );
        }
        return rooms;
    };
    const renderFloorHeading = (floor) => {
        return (
            <div className="text-xl font-bold text-white cursor-pointer bg-gray-700 py-2 px-4 rounded hover:bg-gray-600	">
                Floor {floor}
            </div>
        );
    };
    return (
        <div className="h-full max-h-full px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="container mx-auto">
                <div className='flex justify-around mx-auto'>
                    <div className=""> {renderFloorHeading(1)} </div>
                    <div>{renderFloorHeading(2)} </div>
                    <div>{renderFloorHeading(3)} </div>
                </div>
                <br />
                <div className='flex flex-wrap justify-center'>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto">
                        {renderRooms(1)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 mx-auto">
                        {renderRooms(2)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 mx-auto">
                        {renderRooms(3)}
                    </div>
                </div>

            </div>
            <br />
            <br />
            <div className="container mx-auto">
                <div className='flex justify-around '>
                    <div className=""> {renderFloorHeading(4)} </div>
                    <div>{renderFloorHeading(5)} </div>
                    <div>{renderFloorHeading(6)} </div>
                </div>
                <br />
                <div className='flex justify-around '>
                    <div className="grid grid-cols-5 gap-2  ">
                        {renderRooms(4)}
                    </div>
                    <div className="grid grid-cols-5 gap-2 ">
                        {renderRooms(5)}
                    </div>
                    <div className="grid grid-cols-5 gap-2 ">
                        {renderRooms(6)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomList;
