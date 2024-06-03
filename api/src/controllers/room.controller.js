import Room from "../models/room.model.js";

const createRoom = async (req, res) => {
    try {
        const data = req.body;

        await Room.create(data);

        res.status(201).send({
            message: "Room created",
            data,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

const getRooms = async (req, res) => {
    const rooms = await Room.find();

    res.status(200).send({
        message: "Rooms fetched",
        data: rooms
    });
};

const getRoom = async (req, res) => {
    const { roomId } = req.params;

    const room = await Room.findById(roomId);

    res.status(200).send({
        message: "Room fetched",
        data: room
    });
};

const updateRoom = async (req, res) => {
    const { roomId } = req.params;
    const data = req.body;

    await Room.updateOne({ _id: roomId }, data);

    res.status(200).send({
        message: "Room updated",
        data,
    });
};

const deleteRoom = async (req, res) => {
    const { roomId } = req.params;

    await Room.deleteOne({ _id: roomId });

    res.status(200).send({
        message: "Room deleted",
    });
};


const roomController = {
    createRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom,
};

export default roomController;