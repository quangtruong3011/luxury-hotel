import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255,
    },
    description: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    maxChildren: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;