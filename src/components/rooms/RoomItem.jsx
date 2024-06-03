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
                <p>{room.desciption}</p>
                <p className="text-gray-500 text-lg"><span className="text-rose-500 text-3xl font-semibold leading-3">${room.price}</span> / Night</p>
            </div>
        </div>
    )
};

export default RoomItem;