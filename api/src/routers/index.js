import { Router } from 'express';
import customerRouter from './customer.router.js';
import roomRouter from './room.router.js';
import bookingRouter from './booking.router.js';

const router = Router();

router.use('/rooms', roomRouter);
router.use('/customers', customerRouter);
router.use('/bookings', bookingRouter);

export default router;