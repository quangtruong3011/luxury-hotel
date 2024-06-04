import Booking from "../models/booking.model.js";

const createBooking = async (req, res) => {
    try {
        const data = req.body;

        await Booking.create(data);

        res.status(201).send({
            message: "Booking created",
            data,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

const getBookings = async (req, res) => {
    const bookings = await Booking.find();

    res.status(200).send({
        message: "Bookings fetched",
        data: bookings
    });
};

const getBooking = async (req, res) => {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    res.status(200).send({
        message: "Booking fetched",
        data: booking
    });

};

const updateBooking = async (req, res) => {
    const { bookingId } = req.params;
    const data = req.body;

    await Booking.updateOne({ _id: bookingId }, data);

    res.status(200).send({
        message: "Booking updated",
        data,
    });
};

const deleteBooking = async (req, res) => {
    const { bookingId } = req.params;

    await Booking.deleteOne({ _id: bookingId });

    res.status(200).send({
        message: "Booking deleted",
    });
};

const bookingController = {
    createBooking,
    getBookings,
    getBooking,
    updateBooking,
    deleteBooking,
};

export default bookingController;