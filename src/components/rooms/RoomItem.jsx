import React from 'react';
import { Link } from 'react-router-dom';

const RoomItem = ({ room }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg">
                <img src={room.imgUrl} className="w-full h-full rounded-lg object-cover hover:scale-110 transition-all duration-300 ease-in-out" alt="" loading="lazy" />
            </div>
            <div className="pt-5">
                <h2 className="text-2xl font-semibold leading-tight mb-4 hover:text-rose-500 transition-all duration-150 ease-in-out">
                    <Link to='#'>{room.title}</Link>
                </h2>
                <div className="flex gap-4 mb-4">
                    <p className="text-gray-500"><span className="font-medium mr-2">Capacity:</span>{room.capacity}</p>
                    <p className="text-gray-500"><span className="font-medium mr-2">Max Children:</span> {room.maxChildren}</p>
                </div>
                <p className="text-gray-500 text-lg mb-4"><span className="text-rose-500 text-3xl font-semibold leading-3">${room.price}</span> / Night</p>
                <button className="bg-red-500 text-white rounded-lg hover:bg-red-600 py-3 px-8">Select This Room</button>
            </div>
        </div>
    )
};

export default RoomItem;