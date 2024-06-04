import { useState } from "react";
import BreadcumbArea from "../components/breadcumb-area/BreadcumbArea";

const RoomDetail = () => {
    const [room, setRoom] = useState({});
    return (
        <div>
            <BreadcumbArea title="Room Detail" text="Home" />
            <div className="flex justify-between shadow-lg">
                <div className="">
                    <span className="font-light mb-2">BEDS</span>
                    <h2 className="text-xl font-semibold">{room.beds} Bed</h2>
                </div>
                <div>
                    <span className="font-light mb-2">ROOM SIZE</span>
                    <h2 className="text-xl font-semibold">{room.size}</h2>
                </div>
                <div>
                    <span className="font-light mb-2">OCCUPANCY</span>
                    <h2 className="text-xl font-semibold">{room.adults} adults ({room.children} children)</h2>
                </div>
                <div>
                    <span className="font-light mb-2">BATHROOM</span>
                    <h2 className="tetx-xl font-semibold">{room.bathroom} Shower bath</h2>
                </div>
                <div>
                    <h5>Price <span>${room.price} /Night</span></h5>
                </div>
            </div>
        </div>
    )
};

export default RoomDetail;