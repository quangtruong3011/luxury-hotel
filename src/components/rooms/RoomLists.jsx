import RoomItem from "./RoomItem";

const RoomLists = ({ rooms }) => {
    return (
        <div className="flex justify-center flex-wrap items-center gap-6">
            {rooms.map(room => (
                <RoomItem key={room._id} room={room} />
            ))}
        </div>
    );
};

export default RoomLists;