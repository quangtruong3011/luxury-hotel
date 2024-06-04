import RoomItem from "./RoomItem";

const RoomLists = ({ rooms, handleSelectRoom }) => {
    return (
        <div className="flex justify-center flex-wrap items-center gap-6">
            {rooms.map(room => (
                <RoomItem key={room._id} handleSelectRoom={handleSelectRoom} room={room} />
            ))}
        </div>
    );
};

export default RoomLists;