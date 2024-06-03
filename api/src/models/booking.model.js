import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true,
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    Adults: {
        type: Number,
        required: true,
    },
    Children: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;