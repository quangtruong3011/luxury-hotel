import { Router } from "express";
import bookingController from "../controllers/booking.controller.js";

const bookingRouter = Router();

bookingRouter.use("/", bookingController.getBookings);
bookingRouter.use("/:bookingId", bookingController.getBooking);
bookingRouter.use("/", bookingController.createBooking);
bookingRouter.use("/:bookingId", bookingController.updateBooking);
bookingRouter.use("/:bookingId", bookingController.deleteBooking);

export default bookingRouter;