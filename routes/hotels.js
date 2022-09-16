import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { createError } from '../utlis/error.js';
import { verifyisAdmin } from '../utlis/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/', verifyisAdmin, createHotel);

// UPDATE
router.put('/:id', verifyisAdmin, updateHotel);

// DELETE
router.delete('/:id', verifyisAdmin, deleteHotel);

// GET
router.get('/find/:id', getHotel);

// GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router;
